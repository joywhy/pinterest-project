import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

import { useAtom } from 'jotai';
import {
  searchValueAtom,
  pageAtom,
  // totalImageNumAtom,
  fetchApi,
  totalImageNumAtom,
} from '@/store';

import { ImageDataType } from '@/types';

import Banner from '../components/home/Banner';
import { Nav } from '@/components/common';
import {
  ImageThumbnail,
  ImageCardContent,
  ImageCard,
  ImageTitle,
  ImageDescription,
} from '@/components/home/ImageCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function HomePage() {
  const { toast } = useToast();
  const [searchValue] = useAtom(searchValueAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [images, setImages] = useState([]);

  // const data: ImageDataProps[] = [
  //   {
  //     id: 1,
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',
  //     date: '2024-11-15',
  //     img: '',
  //     like: 1234,
  //   },
  //   {//-
  //     id: 1,//-
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',//-
  //     date: '2024-11-15',//-
  //     img: '',//-
  //     like: 1234,//-
  //   },//-
  //   {//-
  //     id: 1,//-
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',//-
  //     date: '2024-11-15',//-
  //     img: '',//-
  //     like: 1234,//-
  //   },//-
  //   {//-
  //     id: 1,//-
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',//-
  //     date: '2024-11-15',//-
  //     img: '',//-
  //     like: 1234,//-
  //   },//-
  //   {//-
  //     id: 1,//-
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',//-
  //     date: '2024-11-15',//-
  //     img: '',//-
  //     like: 1234,//-
  //   },//-
  //   {//-
  //     id: 1,//-
  //     des: '조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한',//-
  //     date: '2024-11-15',//-
  //     img: '',//-
  //     like: 1234,//-
  //   },//-
  //   // ...//+
  // ].slice(pageIndex, 6);
  //  6개 미만일때도 생각//-
  const [, setTotalImageNum] = useAtom(totalImageNumAtom);

  const fetchImages = useCallback(async () => {
    try {
      console.log('apie 전');
      console.log('page', page);
      const res = await fetchApi(searchValue, page);
      console.log(res);
      if (res.status === 200 && res.data) {
        setImages(res.data.results);
        setTotalImageNum(res.data.total);
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
  }, [searchValue, page, toast, setTotalImageNum]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="w-full  ">
      <Nav />
      <Banner />
      <div className="w-full  grid grid-cols-5 grid-rows-2 gap-[30px] p-[30px] ">
        {images.map((item: ImageDataType, idx) => {
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
      <BasicPagination />
    </div>
  );
}

export function BasicPagination() {
  const { pathname } = useLocation();

  const [page, setPage] = useAtom(pageAtom); //1
  const perPage = 30;
  const [total] = useAtom(totalImageNumAtom);
  const totalPage = Math.ceil(total / perPage); //334

  const onClickPageNumber = (type: string, num?: number) => {
    console.log('num', num);
    console.log('type', type);
    if (type === 'prev') {
      if (page === 1) {
        setPage(1);
      } else {
        setPage((prev) => prev - 1);
      }
    }
    if (type === 'next') {
      if (page === totalPage) {
        setPage(totalPage);
      } else {
        setPage((prev) => prev + 1);
      }
    }
    if (type === 'num' && num) {
      setPage(num);
    }
  };

  const pageList = Array.from({ length: 10 }, (_, index) => {
    return Math.floor((page - 1) / 10) * 10 + index + 1;
  });

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={() => onClickPageNumber('prev')}>
          <PaginationPrevious href={`${pathname}`} />
        </PaginationItem>
        {pageList.map((item) => (
          <PaginationItem
            key={'page' + item}
            onClick={() => onClickPageNumber('num', item)}
            className={item === page ? 'bg-blue-200 rounded' : ''}
          >
            <PaginationLink href={`${pathname}`}>{item}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem onClick={() => onClickPageNumber('next')}>
          <PaginationNext href={`${pathname}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
