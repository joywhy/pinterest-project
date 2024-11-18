import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  // Skeleton,
} from '@/components/ui';
import {
  AlignLeft,
  ClipboardPenLine,
  FolderOpen,
  Heart,
  Pin,
} from 'lucide-react';
import { ImageDataType } from '@/types';
import { useToast } from '@/hooks/use-toast';
interface Props {
  data: ImageDataType;
}
function ImageCard({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="transition duration-120 ease-out hover:scale-105 cursor-pointer">
      {children}
    </div>
  );
}
function ImageThumbnail({ data }: { data: Props }) {
  return (
    <div className="w-full  rounded-md relative  ">
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={`w-[250px] h-[150px] rounded-xl object-cover`}
      />
      {/* <ModalButton data={data} />ß */}
      <CardDialog data={data} />
    </div>
  );
}

function ImageCardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-24 mt-3 flex flex-col justify-between">
      {children}
    </div>
  );
}

// function ModalButton() {
//     return ();
// }
function ImageTitle({ description }: { description: string }) {
  return (
    <small className="w-full gap-1 text-s font-medium line-clamp-2">
      {description ? description : '등록된 묘사 및 설명글이 없습니다.'}
    </small>
  );
}

function ImageDescription({
  created_at,
  likes,
}: {
  created_at: string;
  likes: number;
}) {
  return (
    <div className="flex items-center justify-between w-full ">
      {/* 게시일 */}
      <div className="flex items-center gap-1 text-sm">
        <span className="leading-7">게시일:</span>
        {created_at.split('T')[0]}
      </div>
      {/* 좋아요 수 */}
      <div className="flex items-center gap-1 text-sm">
        <Heart
          className="h-[14px] w-[14px] mt-[2px] text-rose-600"
          fill="#e11d48"
        />
        {likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </div>
    </div>
  );
}

function CardDialog({ data }: { data: ImageDataType }) {
  const { toast } = useToast();
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <div
            className={`w-[250px] h-[150px] rounded-xl border border-red-400 bg-[url(${data.urls.small})]`}
          > */}
        <Button
          size={'icon'}
          className="absolute top-2 right-4 z-10 bg-neutral-500 bg-opacity-50 hover:bg-opacity-50"
        >
          <FolderOpen className="h-5 w-5" />
        </Button>
        {/* </div> */}
      </DialogTrigger>
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
                <AvatarImage
                  src={data.user.profile_image.small}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <small className="text-sm font-medium leading-none">
                {data.user.username}
              </small>
            </div>
            <Button
              variant={'secondary'}
              onClick={() => addBookmark(data)}
              className="hover:bg-slate-400"
            >
              북마크 추카{' '}
            </Button>
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
    </Dialog>
  );
}

export {
  ImageThumbnail,
  ImageCardContent,
  ImageCard,
  ImageTitle,
  ImageDescription,
};
