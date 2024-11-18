import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import {
  AlignLeft,
  ClipboardPenLine,
  // FolderOpen,
  Heart,
  Pin,
} from 'lucide-react';

import { ImageDataType } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

function ImageDialog({ data }: { data: ImageDataType }) {
  const { toast } = useToast();
  const [isMarked, setIsMarked] = useState(false);
  const addBookmark = (imageData: ImageDataType) => {
    console.log('동작');
    console.log(imageData);

    const getLocalStorage = localStorage.getItem('bookmark');
    let bookmarks: ImageDataType[] = [];

    if (getLocalStorage) {
      try {
        bookmarks = JSON.parse(getLocalStorage);
      } catch (error) {
        console.error('Error parsing localStorage:', error);
        bookmarks = [];
      }
    }
    console.log(bookmarks);
    if (bookmarks.length === 0) {
      localStorage.setItem('bookmark', JSON.stringify([imageData]));
      toast({
        title: '로컬스토리지에 올바르게 저장되었습니다.',
      });
    } else {
      const imageExists =
        bookmarks.findIndex((item: ImageDataType) => item.id === imageData.id) >
        -1;

      if (imageExists) {
        toast({
          variant: 'destructive',
          title: '로컬스토리지에 해당 데이터가 이미 저장되어 있습니다.',
        });
      } else {
        bookmarks.push(imageData);
        localStorage.setItem('bookmark', JSON.stringify(bookmarks));

        toast({
          title: '로컬스토리지에 올바르게 저장되었습니다.',
        });
      }
    }
  };
  {
    /* 
      <DialogTrigger asChild>
          className={`w-[250px] h-[150px] rounded-xl border border-red-400 bg-[url(${data.urls.small})] bg-cover`}
        > </DialogTrigger>
     */
  }
  const removeBookmark = (imageData: ImageDataType) => {
    console.log('동작');
    console.log(imageData);

    const getLocalStorage = localStorage.getItem('bookmark');
    let bookmarks: ImageDataType[] = [];

    if (getLocalStorage) {
      try {
        bookmarks = JSON.parse(getLocalStorage);
      } catch (error) {
        console.error('Error parsing localStorage:', error);
        bookmarks = [];
      }
    }
    console.log(bookmarks);

    const imageExists =
      bookmarks.findIndex((item: ImageDataType) => item.id === imageData.id) >
      -1;

    if (imageExists) {
      const newBookmarks = bookmarks.filter((book) => book.id !== imageData.id);
      localStorage.setItem('bookmark', JSON.stringify(newBookmarks));
      toast({
        variant: 'destructive',
        title: '로컬스토리지에 해당 데이터가 삭제되었습니다.',
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle>이미지 상세정보</DialogTitle>
        <DialogDescription>
          선택한 이미지의 상세정보를 확인하세요.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col items-center space-x-2 gap-3">
        {/* Skeleton UI: 이미지 데이터가 렌더링 되기 전 */}
        {/* <Skeleton className="h-80 w-full rounded-xl" /> */}
        {/* 이미지 데이터가 렌더링 된 후 */}
        <img
          src={data.urls.full}
          alt=""
          className="h-80 w-full rounded-xl object-cover"
        />
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data.user.profile_image.small} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <small className="text-sm font-medium leading-none">
              {data.user.username}
            </small>
          </div>
          {isMarked ? (
            <Button
              variant={'secondary'}
              onClick={() => {
                removeBookmark(data);
                setIsMarked(false);
              }}
              className="bg-slate-700 text-white hover:bg-red-500"
            >
              북마크 삭제
            </Button>
          ) : (
            <Button
              variant={'secondary'}
              onClick={() => {
                addBookmark(data);
                setIsMarked(true);
              }}
              className="hover:bg-slate-400"
            >
              북마크 추카
            </Button>
          )}
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center">
            <Pin className="h-4 w-4 min-w-4 mt-[2px] mr-1" />
            <span className="text-sm">{data.alternative_slugs.ko}</span>
          </div>
          <div className="flex items-center">
            <ClipboardPenLine className="h-4 w-4 min-w-4 mt-[2px] mr-1" />
            <span className="text-sm">{data.alt_description}</span>
          </div>
          <div className="flex items-center">
            <AlignLeft className="h-4 w-4 min-w-4 mt-[2px] mr-1" />
            <span className="text-sm">
              {data.description
                ? data.description
                : '등록된 묘사 및 설명글이 없습니다.'}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-4">
          <div className="flex items-center gap-1 text-sm">
            <p className="leading-7">게시일:</p>
            {data.created_at.split('T')[0]}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Heart
              className="h-[14px] w-[14px] mt-[2px] text-rose-600"
              fill="#e11d48"
            />
            {data.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
export { ImageDialog };
