import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { decode } from "jsonwebtoken";

export const UserIdFromToken = createParamDecorator((
    data: unknown, ctx: ExecutionContext
):number =>{
    const req = ctx.switchToHttp().getRequest();
    const authHeader = req.headers.authorization    
    const token = authHeader.split(" ")[1]
    const id = decode(token)["id"]
    return id
})