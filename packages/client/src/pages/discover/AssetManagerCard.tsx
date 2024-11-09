import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import { Avatar } from "../../shared/components/radix.ts";

interface IAssetManagerCardProps {
  thumbnail: string;
  managerName: string;
  totalClients: number;
}

export default function AssetManagerCard(props: IAssetManagerCardProps) {
  return (
    <div className="border p-2 rounded flex">
      <div className={"flex flex-col"}>
        <div className="flex">
          <Avatar.Root>
            <Avatar.Image
              className={"size-8 object-cover primary rounded-full"}
              src={props.thumbnail}
              alt={props.managerName}
            />
          </Avatar.Root>

          <FlexSeparator size="sm" />

          <div className="flex flex-col">
            <p className={"font-medium text-sm tracking-tight"}>
              {props.managerName}
            </p>

            <p className={"text-xxs text-foreground/40 pt-px"}>
              Registered 273 Days ago
            </p>
          </div>
        </div>

        <FlexSeparator size="sm" />

        <div className="flex gap-x-2">
          <figure
            title="Total Clients"
            className={"flex items-center text-xxs muted w-max p-1 gap-x-1 rounded-sm"}
          >
            <Icon name="User" className="size-3" />
            <span>{props.totalClients}</span>
          </figure>

          <figure
            title="Positive feedback"
            className={"flex items-center text-xxs muted w-max p-1 gap-x-1 rounded-sm"}
          >
            <Icon name="ThumbsUp" className="size-3" />
            <span>92.4%</span>
          </figure>
        </div>

        <div className="flex pt-4">
          <div className="flex flex-col gap-y-1 items-center">
            <p className={"text-xs text-foreground/40"}>7D RoI</p>
            <p className={"text-xxs text-foreground/80"}>7.42%</p>
          </div>

          <FlexSeparator size="xl" />

          <div className="flex flex-col gap-y-1 items-center">
            <p className={"text-xs text-foreground/40"}>Profit Share</p>
            <p className={"text-xxs text-foreground/80"}>12.00%</p>
          </div>
        </div>
      </div>

      <FlexSeparator size="full" />

      <div className="flex flex-col">
        <p className={"text-sm"}>Most Traded</p>
      </div>
    </div>
  );
}