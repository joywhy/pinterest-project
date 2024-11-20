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
import { useAtom } from 'jotai';
import { bookmarksAtom, BookmarkType } from '@/store/bookmarkstore';

function ImageDialog({ data }: { data: ImageDataType }) {
  const { toast } = useToast();
  const [bookmarks, setBookmarks] = useAtom<BookmarkType>(bookmarksAtom);
  const isMarked = bookmarks.findIndex((item) => item.id === data.id) > -1;

  const addBookmark = (imageData: ImageDataType) => {
    const newBookmarks: BookmarkType = [...bookmarks, imageData];
    setBookmarks(newBookmarks);
    localStorage.setItem('bookmark', JSON.stringify(newBookmarks));

    toast({
      title: '로컬스토리지에 올바르게 저장되었습니다.',
    });
  };

  const removeBookmark = (imageData: ImageDataType) => {
    const newBookmarks = bookmarks.filter((book) => book.id !== imageData.id);
    setBookmarks(newBookmarks);

    localStorage.setItem('bookmark', JSON.stringify(newBookmarks));

    toast({
      variant: 'destructive',
      title: '로컬스토리지에 해당 데이터가 삭제되었습니다.',
    });
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
