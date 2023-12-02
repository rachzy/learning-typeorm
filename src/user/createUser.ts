import { DataSource } from "typeorm";
import { User } from "../entity/User";

export async function createUser(dataSource: DataSource): Promise<User> {
  const userRepository = dataSource.getRepository(User);

  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;

  await userRepository.save(user);

  console.log("Saved a new user with id: " + user.id);
  return user;
}
