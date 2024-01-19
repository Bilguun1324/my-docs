import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from './firebase';

export type UseStorageType = {
  uploadImage: (data: File[] | File, path?: string, name?: string) => Promise<string[]>;
  deleteImage: (url: string) => Promise<void>;
};

const uploadImage = async (data: File[] | File, path?: string, name = ''): Promise<string[]> => {
  if (!Array.isArray(data)) {
    data = [data];
  }
  const promises = data.map((item) => {
    const extension = '.' + (item.name.split('.').pop() ?? 'jpg');
    const storageReference = ref(storage, (path ?? 'images') + '/' + name + '-' + v4().slice(28) + extension);
    const metadata = {
      contentType: item.type,
    };
    return uploadBytes(storageReference, item, metadata);
  });
  const snapshots = await Promise.all(promises);
  const newPromises = snapshots.map((snapshot) => getDownloadURL(snapshot.ref));
  return Promise.all(newPromises);
};

const deleteImage = (url: string): Promise<void> => {
  const reference = ref(storage, url);
  return deleteObject(reference);
};

export const useStorage = (): UseStorageType => {
  return { uploadImage, deleteImage };
};
