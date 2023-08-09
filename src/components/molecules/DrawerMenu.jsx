import { Drawer } from "@mui/material";
import React from "react";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      Menu
    </Drawer>
  );
}
