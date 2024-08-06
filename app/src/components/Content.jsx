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
                  <div
                    style={{
                      height: 240,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={getImgUrl(e.metadata)}
                      alt={`${i}`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                      placeholder={
                        <Skeleton.Image
                          active={true}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        />
                      }
                      fallback='./images/zerologo.svg'
                    />
                  </div>
                }
              >
                <div>
                  <Meta
                    title={`${e.name}\n${e.token_id}`}
                    style={{ display: "block" }}
                  />
                </div>
              </Card>
            </>
          );
        })}
      </div>
      <div className='spinner'>
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
