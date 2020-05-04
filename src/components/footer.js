import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { makeStyles } from "@material-ui/core/styles";

const FooterContainer = styled.div`
  text-align: center;
  bottom: 0;
  width: 100% !important;
  height: 20px !important ;
  // background: #6cf;
  // margin-top: calc(5% + 20px);
`;

const useStyles = makeStyles({
  root: {
    // margin-top:''
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <FooterContainer>
      <Typography variant="h6">
        <CopyrightIcon fontSize="small" /> Abdirahman Farah
      </Typography>
    </FooterContainer>
  );
};
export default Footer;
