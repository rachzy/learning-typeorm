import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Photo } from "../entity/Photo";

export async function getPhotosFromUser(
  dataSource: DataSource,
  user: User
): Promise<Photo[]> {
  const photosRepository = dataSource.getRepository(Photo);

  return photosRepository.find({
    where: {
      author: {
        id: user.id,
      },
    },
    relations: {
      author: true,
    },
  });
}
