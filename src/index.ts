import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { createPhoto } from "./photo/createPhoto";
import { getPhotoById } from "./photo/getPhotoById";
import { getPhotosFromUser } from "./photo/getPhotosFromUser";
import { createPhotoMetadata } from "./photometadata/createPhotoMetadata";
import { createUser } from "./user/createUser";
import { editUser } from "./user/editUser";
import { getUserById } from "./user/getUserById";
import { getUsers } from "./user/getUsers";

async function main() {
  const dataSource = await AppDataSource.initialize();
  const newUser = await createUser(dataSource);
  const newPhoto = await createPhoto(dataSource, newUser);
  const newMetadata = await createPhotoMetadata(dataSource, newPhoto);

  console.log(await getUsers(dataSource));
  console.log(`New user: `, await getUserById(dataSource, newUser.id));
  console.log(`New photo: `, await getPhotoById(dataSource, newPhoto.id));

  const edittedUser: User = {
    ...newUser,
    firstName: "Bob",
  };

  await editUser(dataSource, edittedUser);
  const finalNewUser = await getUserById(dataSource, newUser.id);
  console.log(`Editted user: `, finalNewUser);

  await createPhoto(dataSource, newUser);
  await createPhoto(dataSource, newUser);
  await createPhoto(dataSource, newUser);
  await createPhoto(dataSource, newUser);

  const photosFromUser = await getPhotosFromUser(dataSource, finalNewUser);
  console.log(
    `All photos from user ${finalNewUser.firstName}: `,
    photosFromUser
  );
}
main();
