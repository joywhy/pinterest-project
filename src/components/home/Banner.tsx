import { useState } from 'react';
import { SearchBar } from '@/components/ui';

function Banner() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <div className="w-full h-[300px] flex justify-center items-center bg-black">
      <div className="w-[700px] text-white">
        <h1 className="text-4xl font-extrabold">
          프로젝트 02: 오픈 API를 활용한 이미지 검색 사이트 만들기
        </h1>
        <p className="mt-3 font-sm font-thin">
          인터넷 시각자료 출처입니다. 모든 지역에 있는 크리에이터들의 지원을
          받습니다.
        </p>
        <SearchBar
          value={inputValue}
          placeholder="원하는 이미지를 검색하세요"
          className="mt-5 text-black"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Banner;
