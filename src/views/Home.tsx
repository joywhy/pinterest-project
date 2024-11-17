// import { Children, useState } from 'react';
import Banner from '../components/home/Banner';

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
//   Button,
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   Skeleton,
// } from '@/components/ui';
// import {
//   AlignLeft,
//   ClipboardPenLine,
//   FolderOpen,
//   Heart,
//   Pin,
// } from 'lucide-react';
// interface ImageDataProps {
//   id: number;
//   des: string;
//   date: string;
//   img: string;
//   like: number;
// }
function HomePage() {
  // const [pageIndex, setPageIndex] = useState<number>(0);

  // const data: ImageDataProps[] = [
  //   {
  //     id: 1,
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',
  //     date: '2024-11-15',
  //     img: '',
  //     like: 1234,
  //   },
  //   {
  //     id: 1,
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',
  //     date: '2024-11-15',
  //     img: '',
  //     like: 1234,
  //   },
  //   {
  //     id: 1,
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',
  //     date: '2024-11-15',
  //     img: '',
  //     like: 1234,
  //   },
  //   {
  //     id: 1,
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',
  //     date: '2024-11-15',
  //     img: '',
  //     like: 1234,
  //   },
  //   {
  //     id: 1,
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',
  //     date: '2024-11-15',
  //     img: '',
  //     like: 1234,
  //   },
  //   {
  //     id: 1,
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',
  //     date: '2024-11-15',
  //     img: '',
  //     like: 1234,
  //   },
  // ].slice(pageIndex, 6);
  //  6개 미만일때도 생각
  return (
    <div className="w-full  border border-red-500">
      <Banner />
      <div className="w-full h-[500px] grid grid-cols-4 grid-rows-2 gap-[30px] p-[30px] border border-blue-500">
        {/* {data.map((item, idx) => {
          return <ImageCard {...item} key={idx + '이미지 카드'} />;
        })} */}
      </div>
    </div>
  );
}

// function ImageCard(data: ImageDataProps) {
//   return (
//     <div className="border border-red-400">
//       <ImageThumbnail img={data.img}>
//         <ModalButton data={data} />
//       </ImageThumbnail>
//     </div>
//   );
// }

// function ImageThumbnail({
//   img,
//   children,
// }: {
//   img: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="w-full h-[100px] rounded-md relative">
//       <img src={img} alt="이미지" />
//       {children}
//     </div>
//   );
// }
// function ImageCardContent({ children }: { children: React.ReactNode }) {
//   return <div>{children}</div>;
// }
export default HomePage;
