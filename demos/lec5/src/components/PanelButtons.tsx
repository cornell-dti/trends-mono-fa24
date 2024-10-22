import { Dispatch, SetStateAction } from "react";
import { Button } from "semantic-ui-react";
import { UserData } from "../types";

type Props = {
    fetchedUser: UserData;
    setMyUser: Dispatch<SetStateAction<UserData | null>>;
};

const PanelButtons = ({ fetchedUser, setMyUser }: Props) => {
    const stealPicture = () => {
        const { picture } = fetchedUser;
        setMyUser((user) => user ? { ...user, picture } : null);
    };

    const stealTitle = () => {
        const { title } = fetchedUser.name;
        setMyUser((user) => user ? { ...user, name: { ...user.name, title } } : null);
    };

    const stealFirstName = () => {
        const { first } = fetchedUser.name;
        setMyUser((user) => user ? { ...user, name: { ...user.name, first } } : null);
    };

    const stealLastName = () => {
        const { last } = fetchedUser.name;
        setMyUser((user) => user ? { ...user, name: { ...user.name, last } } : null);
    };

    return (
        <Button.Group vertical>
            <Button secondary basic onClick={stealPicture}>
                Steal Picture
            </Button>
            <Button secondary basic onClick={stealTitle}>
                Steal Title
            </Button>
            <Button secondary basic onClick={stealFirstName}>
                Steal First Name
            </Button>
            <Button secondary basic onClick={stealLastName}>
                Steal Last Name
            </Button>
        </Button.Group>
    );
};

export default PanelButtons;
