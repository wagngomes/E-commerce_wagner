import { Button } from "./button"
import { Card, CardContent } from "./card"
import { MenuIcon, ShoppingCartIcon } from "lucide-react"

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem]">

        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
        <h1>FSW STORE</h1>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>

    </Card>
  );
};

export default Header