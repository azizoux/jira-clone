import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex gap-4 mt-10">
      <Button size="lg">Primary123</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"destructive"} size="xs">
        Destructive
      </Button>
      <Button variant={"ghost"} size="lg">
        Ghost
      </Button>
      <Button variant={"muted"} size="lg">
        Muted
      </Button>
      <Button variant={"outline"} size="lg">
        Outline
      </Button>
      <Button variant={"teritary"}>Teritary</Button>
      <div>
        <Input />
      </div>
    </div>
  );
}
