// pages/proxyPage.js
import fetch from "node-fetch"; // 如果你使用的是Node.js 17以下版本，可能需要安装并导入fetch

export async function getServerSideProps(context) {
  // 目标网页的URL
  const targetUrl =
    "http://localhost:8088/superset/dashboard/6/?native_filters_key=NC2e6i4-rk7JX2XYDavZNc9N_CdckZ5dc7_QKe6wKVPajInK_Egu5ZB3PkfWskFV";

  // 请求外部网页内容
  const res = await fetch(targetUrl);
  const data = await res.text(); // 假设目标内容是HTML

  // 将获取的内容传递给页面
  return { props: { data } };
}
export default function ProxyPage({ data }) {
  // 这里的{ data }是通过props传递进来的
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
