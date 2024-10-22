import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import { UserData, RandomUserAPIResponse } from "../types";
import PanelButtons from "./PanelButtons";
import UserDisplay from "./UserDisplay";

const IdentityPicker = () => {
  // states
  const [myUser, setMyUser] = useState<UserData | null>(null);
  const [fetchedUser, setFetchedUser] = useState<UserData | null>(null);

  // TODO: call this function to fetch data
  // const fetchRandomUser = () =>
  //   // NOTE: Each time we call this API, we get different random user data
  //   // API: "https://randomuser.me/api"
  // TODO: fake timeout (final, 1 sec)
  // TODO: final error catching

  // TODO: at page load, fetch users and set state once the data arrives

  const summarizeUser = (user: UserData | null) => {
    if (!user) return "Hello!";
    const { title, first, last } = user.name;
    return `Hello, I am ${title} ${first} ${last}.`;
  };

  return (
    <Container textAlign="center" style={{ marginTop: "3em" }}>
      <Header as="h1">
        Identity Picker
        <Header.Subheader>{summarizeUser(myUser)}</Header.Subheader>
      </Header>
      <Divider />
      <Grid container columns={3} relaxed stackable>
        <Grid.Column>
          <UserDisplay header="Me" user={myUser} />
        </Grid.Column>
        <Grid.Column>
          {/* TODO: handle click */}
          <Button color="green" attached="top" onClick={() => "TODO"}>
            Refresh
          </Button>
          <Header as="h2" attached content="Control Panel" />
          <Segment attached="bottom">
            {myUser && fetchedUser && (
              <PanelButtons fetchedUser={fetchedUser} setMyUser={setMyUser} />
            )}
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <UserDisplay header="Fetched User" user={fetchedUser} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default IdentityPicker;
