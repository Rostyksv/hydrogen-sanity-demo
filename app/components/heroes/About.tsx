import clsx from "clsx";
import {SanityAboutHome} from "~/lib/sanity";

type Props = {
  about: SanityAboutHome;
};

export default function HomeAbout({about}: Props) {
  return (
    <div
      className={clsx(
        'w-full absolute bottom-8 flex flex-col items-center rounded-b-xl bg-peach px-4 pb-4 pt-24',
        'md:px-8 md:pb-8 md:pt-34',
      )}
    >
      {/* description */}
      {about?.description && (
        <p
          className={clsx(
            'mb-7 max-w-[60rem] whitespace-pre-line text-center text-lg',
            'md:text-xl',
          )}
        >
          {about.description}
        </p>
      )}
    </div>
  );
}
