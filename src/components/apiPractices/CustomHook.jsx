import axios from "axios";
import { useAsync } from "./useAsync";

const getUsers = async () => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/users");
  return response.data;
};

const CustomHook = () => {
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러가 발생하였습니다!</div>;
  if (!users) return <button onClick={refetch}>유저 정보 불러오기</button>;
  return (
    <div>
      <span>
        CustomHook: 아래 부분은 customHook(useAsync)를 이용하여 API 연동한
        부분입니다!
      </span>
      {users.map((user, idx) => (
        <li key={idx}>{user.username}</li>
      ))}
      <button onClick={refetch}>다시 불러오기</button>
    </div>
  );
};

export default CustomHook;
