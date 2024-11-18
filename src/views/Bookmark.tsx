import { Header } from '@/components/common';
import { ImageDataType } from '@/types';
import {
  ImageThumbnail,
  ImageCardContent,
  ImageDataProps,
  ImageCard,
  ImageTitle,
  ImageDescription,
} from '@/components/home/ImageCard';
function Bookmark() {
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
  // console.log(bookmarks);

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="w-full  grid grid-cols-5 grid-rows-2 gap-[30px] p-[30px] ">
          {bookmarks.map((item: ImageDataProps, idx) => {
            return (
              <ImageCard key={`${idx}-image-card`}>
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
      </div>
    </div>
  );
}

export default Bookmark;
