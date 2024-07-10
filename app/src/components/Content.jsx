/* eslint-disable react/prop-types */
import { Button, Card, Image, Skeleton, Spin } from "antd";
import { Typewriter } from "./Typewriter";
import CardList from "./CardList";

const { Meta } = Card;

function Content({
  fetchNFTs,
  NFTs,
  cursor,
  getImgUrl,
  isLoading,
  setAddress,
}) {
  return (
    <>
      {NFTs.length ? null : (
        <div>
          <Typewriter />
          <CardList setAddress={setAddress} fetchNFTs={fetchNFTs} />
        </div>
      )}
      <div className='results'>
        {NFTs?.map((e, i) => {
          return (
            <>
              <Card
                bordered={true}
                hoverable={true}
                style={{ width: 240 }}
                cover={
                  <Image
                    src={getImgUrl(e.metadata)}
                    alt={`${i}`}
                    placeholder={
                      <Skeleton.Image
                        active={true}
                        size='large'
                        block={true}
                        style={{ width: 240, height: 240 }}
                      />
                    }
                    fallback='./images/zerologo.svg'
                  />
                }
              >
                <div>
                  <Meta title={`${e.name}\n${e.token_id}`} />
                </div>
              </Card>
            </>
          );
        })}
      </div>
      <div className='spinner'>
        {isLoading && (!NFTs || NFTs.length === 0) && (
          <Spin fullscreen={true} size='large' />
        )}
        {NFTs && NFTs.length > 0 && isLoading && <Spin size='large' />}
      </div>
      {cursor && (
        <>
          <div className='loadButton'>
            <Button type='dashed' size='large' onClick={fetchNFTs}>
              Load More
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Content;
