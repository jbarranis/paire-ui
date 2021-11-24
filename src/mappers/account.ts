import { AutoMap } from "@automapper/classes";
import {
  CamelCaseNamingConvention,
  mapFrom,
  PascalCaseNamingConvention,
} from "@automapper/core";
import { mapper } from "./mapper";

export class User {
  @AutoMap()
  email: string;

  @AutoMap()
  id: number;

  @AutoMap()
  first_name: string;

  @AutoMap()
  last_name: string;
}

export class UserDto {
  @AutoMap()
  email: string;

  @AutoMap()
  id: number;

  @AutoMap()
  lastName: string;

  @AutoMap()
  firstName: string;
}

mapper
  .createMap(User, UserDto, {
    namingConventions: {
      source: new PascalCaseNamingConvention(),
      destination: new CamelCaseNamingConvention(),
    },
  })
  .forMember(
    (destination) => destination.id,
    mapFrom((source) => source.id)
  )
  .forMember(
    (destination) => destination.firstName,
    mapFrom((source) => source.first_name)
  )
  .forMember(
    (destination) => destination.lastName,
    mapFrom((source) => source.last_name)
  )
  .forMember(
    (destination) => destination.email,
    mapFrom((source) => source.email)
  );
