import Tab from '@/components/Tab';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.home}>
      <Tab />
      个人中心
    </div>
  );
}