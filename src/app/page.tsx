import { Blur } from "@/shared/components";
import { Header, Preview } from "@/widgets";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div style={{position: 'relative'}}>
          <Blur width={200} height={200} blur={200} />
        </div>
        <Header />
        <Preview />
      </div>
    </div>
  );
}
