import { Field, Message, Type } from "protobufjs";

@Type.d("Client")
export class Client extends Message<Client> {
  @Field.d(1, "string")
  public location = "";

  @Field.d(13, "string")
  public name = "";
}
