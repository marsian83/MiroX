import * as viem from "viem";

export async function metaTxRequest<
  A extends Readonly<Parameters<typeof viem.encodePacked>>,
>(
  parameters: {
    signer: viem.WalletClient<viem.Transport, viem.Chain, viem.Account>;
    contract: viem.Address;
    functionName: string;
    args: A;
    nonce?: bigint;
  },
) {
  const { signer, args, contract, functionName } = parameters;

  const msg = viem.keccak256(
    viem.encodePacked(args[0], args[1]),
  );

  const digest = viem.keccak256(
    viem.encodePacked(["address", "address", "string", "bytes32", "uint"], [
      signer.account.address,
      contract,
      functionName.toString(),
      msg,
      parameters.nonce || 0n,
    ]),
  );

  const signature = await signer.signMessage({
    message: { raw: viem.hexToBytes(digest) },
  });

  return [signer.account.address, ...(args[1] as A[1]), signature] as const;
}
