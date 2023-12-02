import { DataSource } from "typeorm";
import { Photo } from "../entity/Photo";
import { User } from "../entity/User";

export async function createPhoto(dataSource: DataSource, author: User): Promise<Photo> {
  const photoRepository = dataSource.getRepository(Photo);

  const photo = new Photo();
  photo.name = "Me and Bears";
  photo.author = author;
  photo.description = "I am near polar bears";
  photo.filename = "photo-with-bears.jpg";
  photo.views = 1;
  photo.isPublished = true;

  const finalPhoto = await photoRepository.save(photo);
  console.log("Photo has been saved. Photo id is", finalPhoto.id);

  return finalPhoto;
}
