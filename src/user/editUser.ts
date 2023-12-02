import { DataSource } from "typeorm";
import { User } from "../entity/User";

export async function editUser(dataSource: DataSource, user: User) {
    const userRepository = dataSource.getRepository(User);

    return await userRepository.save(user);
}