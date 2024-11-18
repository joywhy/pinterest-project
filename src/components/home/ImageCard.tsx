// import {
//   Button,
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   Skeleton,
// } from '@/components/ui';
import {
  // AlignLeft,
  // ClipboardPenLine,
  // FolderOpen,
  Heart,
  // Pin,
} from 'lucide-react';
import { ImageDataType } from '@/types';
interface Props {
  data: ImageDataType;
}
function ImageCard({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="border border-red-400">{children}</div>;
}
function ImageThumbnail({ data }: { data: Props }) {
  return (
    <div className="w-full  rounded-md relative ">
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className="w-[250px] h-[150px] rounded-xl object-cover"
      />
      {/* <ModalButton data={data} />ß */}
    </div>
  );
}
function ImageCardContent({ children }: { children: React.ReactNode }) {
  return <div className="w-full border border-red-400">{children}</div>;
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
    <div className="flex items-center justify-between w-full">
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

export {
  ImageThumbnail,
  ImageCardContent,
  ImageCard,
  ImageTitle,
  ImageDescription,
};
