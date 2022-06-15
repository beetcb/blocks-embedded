import { useRouter } from 'next/router';

function Discus() {
  const router = useRouter();
  const { query } = router;

  return (
    <script
      src="https://giscus.app/client.js"
      data-repo="[在此输入仓库]"
      data-repo-id="[在此输入仓库 ID]"
      data-category="[在此输入分类名]"
      data-category-id="[在此输入分类 ID]"
      data-mapping="pathname"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="light"
      data-lang="zh-CN"
      crossOrigin="anonymous"
      async
    ></script>
  );
}

export default Discus;
