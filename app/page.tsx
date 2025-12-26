import { Button } from "@heroui/button";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/offline";
import bellIcon from "@iconify/icons-solar/bell-outline";

export default function Home() {
  return (
    <div>
      <Button variant="ghost" color="success">
        click me
      </Button>
      <Icon width={50} height={50} icon={bellIcon} color="blue" />
    </div>
  );
}
