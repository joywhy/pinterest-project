import { ImageDataType } from '@/types';
import {
  ImageThumbnail,
  ImageCardContent,
  ImageCard,
  ImageTitle,
  ImageDescription,
} from '@/components/home/ImageCard';
import { useAtom } from 'jotai';
import { bookmarksAtom, BookmarkType } from '@/store/bookmarkstore';

function Bookmark() {
  const [bookmarks] = useAtom<BookmarkType>(bookmarksAtom);

  if (bookmarks.length === 0) {
    return <div className=" pt-5 font-bold ">저장한 이미지가 업써요.</div>;
  }
  return (
    <div className="w-full  grid grid-cols-5 grid-rows-2 gap-[30px] p-[30px]  ">
      {bookmarks.map((item: ImageDataType, idx) => {
        return (
          <ImageCard key={`image-${idx}-image-card` + 'sd'}>
            <ImageThumbnail data={item} />
            <ImageCardContent>
              <ImageTitle description={item.description} />
              <ImageDescription
                created_at={item.created_at}
                likes={item.likes}
              />
            </ImageCardContent>
          </ImageCard>
        );
      })}
    </div>
  );
}

export default Bookmark;
