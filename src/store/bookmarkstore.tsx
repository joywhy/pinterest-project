import { atom } from 'jotai';
import { ImageDataType } from '@/types';

export type BookmarkType = ImageDataType[] | [];

const localBookmarks = window.localStorage.getItem('bookmark');

let marks: BookmarkType = [];
if (localBookmarks) {
  marks = JSON.parse(localBookmarks);
} else {
  window.localStorage.setItem('bookmark', JSON.stringify(marks));
}

export const bookmarksAtom = atom<BookmarkType>(marks);

// const addBookmark = (imageData: ImageDataType) => {
//   console.log('동작');
//   console.log(imageData);

//   const getLocalStorage = localStorage.getItem('bookmark');
//   let bookmarks: ImageDataType[] = [];

//   if (getLocalStorage) {
//     try {
//       bookmarks = JSON.parse(getLocalStorage);
//     } catch (error) {
//       console.error('Error parsing localStorage:', error);
//       bookmarks = [];
//     }
//   }
//   console.log(bookmarks);
//   if (bookmarks.length === 0) {
//     localStorage.setItem('bookmark', JSON.stringify([imageData]));
//     toast({
//       title: '로컬스토리지에 올바르게 저장되었습니다.',
//     });
//   } else {
//     const imageExists =
//       bookmarks.findIndex((item: ImageDataType) => item.id === imageData.id) >
//       -1;

//     if (imageExists) {
//       toast({
//         variant: 'destructive',
//         title: '로컬스토리지에 해당 데이터가 이미 저장되어 있습니다.',
//       });
//     } else {
//       bookmarks.push(imageData);
//       localStorage.setItem('bookmark', JSON.stringify(bookmarks));

//       toast({
//         title: '로컬스토리지에 올바르게 저장되었습니다.',
//       });
//     }
//   }
// };
