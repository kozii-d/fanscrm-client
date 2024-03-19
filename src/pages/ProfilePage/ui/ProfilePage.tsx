import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "shared/ui/Card/Card";
import { Page } from "shared/ui/Page/Page";

import { getUserEmail, fetchUserById, getUserIsLoading } from "entities/User";


const ProfilePage = () => {
  const dispatch = useAppDispatch();
  
  const { id } = useParams<{id: string}>();

  useEffect(() => {
    dispatch(fetchUserById(Number(id)));
  }, [dispatch, id]);

  const email = useSelector(getUserEmail);
  const isLoading = useSelector(getUserIsLoading);


  return (
    <Page>
      <Card>
        {isLoading ? (<p>Loading...</p>) : (<p>My Email: {email}</p>)}
      </Card>
    </Page>
  );
};

export default ProfilePage;