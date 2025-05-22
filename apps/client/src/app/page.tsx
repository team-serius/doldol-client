import { Button } from '@ui/Button/Button';
import { Icon } from '@ui/components/Icon';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="bg-white w-full flex justify-center p-8">
        <Button variant={'primary'} size={'large'} className="w-64">
          {/* <Icon icon={undefined}></Icon> */}
        </Button>
      </main>
    </div>
  );
}
