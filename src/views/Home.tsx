import { useState, useEffect, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { searchValueAtom, pageAtom, fetchApi } from '@/store';
import Banner from '../components/home/Banner';
import {
  ImageThumbnail,
  ImageCardContent,
  ImageDataProps,
  ImageCard,
  ImageTitle,
  ImageDescription,
} from '@/components/home/ImageCard';
import { useToast } from '@/hooks/use-toast';

function HomePage() {
  const { toast } = useToast();
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const [page] = useAtom(pageAtom);
  const [images, setImages] = useState([]);

  const [pageIndex] = useState<number>(0);

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

  const fetchImages = useCallback(async () => {
    try {
      const res = await fetchApi(searchValue, page);
      console.log(res);
      console.log(searchValue);

      if (res.status === 200 && res.data) {
        setImages(res.data.results);
        toast({
          title: 'Unsplash API 호출 성공!!',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Unsplash API 호출 실패!!',
          description: 'API 호출을 위한 필수 파라미터 값을 체크해보세요!',
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Unsplash API 호출 실패!!',
        description: 'API 호출을 위한 필수 파라미터 값을 체크해보세요!',
      });
    }
  }, [searchValue, page, toast]);

  useEffect(() => {
    fetchImages();
  }, [searchValue, page, fetchImages]);

  return (
    <div className="w-full  border border-red-500">
      <Banner />
      <div className="w-full  grid grid-cols-5 grid-rows-2 gap-[30px] p-[30px] border border-blue-500">
        {images.map((item: ImageDataProps, idx) => {
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
  );
}

export default HomePage;
