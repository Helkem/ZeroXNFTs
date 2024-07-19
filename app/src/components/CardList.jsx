import { animate, useMotionValue, motion } from "framer-motion";
import { GlareCard } from "./ui/glare-card";
import { useMeasure } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const imagesList = [
  {
    image: "./images/clone9.avif",
    imgContractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  },
  {
    image: "./images/rem2.avif",
    imgContractAddress: "0xD3D9ddd0CF0A5F0BFB8f7fcEAe075DF687eAEBaB",
  },
  {
    image: "./images/azuki.avif",
    imgContractAddress: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  },
  {
    image: "./images/cryptopunk2.avif",
    imgContractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
  },

  {
    image: "./images/azuki2.avif",
    imgContractAddress: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  },
  {
    image: "./images/rem3.avif",
    imgContractAddress: "0xD3D9ddd0CF0A5F0BFB8f7fcEAe075DF687eAEBaB",
  },
  {
    image: "./images/armada.svg",
    imgContractAddress: "0xe50765DeB1429475b28F871571B9417E9FD0E542",
  },
  {
    image: "./images/clone10.avif",
    imgContractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  },
  {
    image: "./images/opepen.avif",
    imgContractAddress: "0x6339e5E072086621540D0362C4e3Cea0d643E114",
  },
  {
    image: "./images/remilio.avif",
    imgContractAddress: "0xD3D9ddd0CF0A5F0BFB8f7fcEAe075DF687eAEBaB",
  },
];

const FAST_DURATION = 70;
const SLOW_DURATION = 139;

// eslint-disable-next-line react/prop-types
function CardList({ setAddress }) {
  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const xTranslation = useMotionValue(0);

  const onCardClick = (newAddress) => {
    setAddress(newAddress);
  };

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    const controls = animate(
      xTranslation,
      [xTranslation.get(), finalPosition],
      {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender((prev) => !prev);
        },
      }
    );

    if (!mustFinish) {
      animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, mustFinish, rerender]);

  return (
    <div>
      <motion.div
        className='absolute left-0 flex gap-4 cursor-pointer'
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...imagesList, ...imagesList].map((item, idx) => (
          <div key={idx} onClick={() => onCardClick(item.imgContractAddress)}>
            <GlareCard>
              <img
                className='h-full w-full absolute inset-0 object-cover'
                src={item.image}
                alt='NFT'
              />
            </GlareCard>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default CardList;
