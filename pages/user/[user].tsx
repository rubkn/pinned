import { GetServerSideProps, NextPage } from "next";
import { getPinnedRepos } from "../../graphql";

const PinnedItemsPage: NextPage = ({ pinnedItems }: any) => {
  console.log("pinnedItems", pinnedItems);
  return (
    <div>
      <h1>Pinned Repos</h1>
      {/* {pinnedItems.map((item: any) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = context.query;
  const pins = await getPinnedRepos(user as string);

  return {
    props: {
      pinnedItems: pins,
    },
  };
};

export const config = {
  api: {
    externalResolver: true,
  },
};

export default PinnedItemsPage;
