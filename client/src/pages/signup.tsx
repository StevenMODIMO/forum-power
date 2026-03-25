import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Mail, Key, File } from "lucide-react";

export default function Signup() {
  return (
    <div>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>Create a new account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-2">
            <Label className="flex flex-col items-start">
              <div className="flex flex-col border-3 cursor-pointer rounded-full p-4 w-fit mx-auto items-center gap-2">
                <File className="w-4 h-4" />
                <span>Avatar</span>
              </div>
              <Input type="file" className="hidden" />
            </Label>
            <Label className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </div>
              <Input />
            </Label>
            <Label className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                <span>Password</span>
              </div>
              <Input />
            </Label>
            <Button>Create account</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
