import styles from './index.less';
import { Link } from 'umi';

interface Props {
  children: JSX.Element;
}
export default function IndexPage(props: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <Link to="/">首页</Link>
        <Link to="/admin">管理</Link>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
