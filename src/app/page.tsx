import styles from './styles/page.module.css';
import { Blur } from "@/shared/components";
import { AboutMe, Header, Preview } from "@/widgets";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className={styles.blurWrapper}>
          <Blur width={200} height={200} blur={200} />
        </div>
        <Header />
        <Preview />
        <AboutMe />
      </div>
    </div>
  );
}
