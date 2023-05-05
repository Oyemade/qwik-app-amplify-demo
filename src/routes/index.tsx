import { $, component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { Auth, Amplify } from "aws-amplify";
import awsExports from "../envExport";

export default component$(() => {
  useVisibleTask$(() => {
    Amplify.configure({ ...awsExports });
  });

  const nav = useNavigate();

  const signOut = $(async () => {
    try {
      await Auth.signOut();
      nav("/");
    } catch (error) {
      alert("Error signing out: " + error);
    }
  });

  return (
    <>
      <h1>Hello World</h1>
      <button onClick$={() => signOut}>Sign Out</button>
    </>
  );
});
