import axios from "axios";

export async function getServerSideProps(context) {
  // 使用axios获取数据
  const { data } = await axios.get(
    "http://localhost:3000/mqttjson/NewestLocation"
  );
  console.log(data);
  // 将获取到的数据作为props传递给页面组件
  return {
    props: { data }, // 将被传递给页面组件
  };
}
