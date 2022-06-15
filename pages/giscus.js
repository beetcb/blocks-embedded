import Giscus from '@giscus/react';
import { useRouter } from 'next/router';

function Discus() {
  const pageId = useRouter().query.id;

  return (
    <Giscus
      repo="beetcb/comments"
      repoId="R_kgDOHgWYoQ"
      category="Announcements"
      categoryId="DIC_kwDOHgWYoc4CPrmU"
      mapping="specific"
      term={pageId}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    ></Giscus>
  );
}

export default Discus;
