import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Arrow from '@material-ui/icons/ArrowRightAlt';
import ListItem from '../security_texts/ListItem';
import TypeComponent from './TypeComponent'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: theme.mixins.toolbar.minHeight,
    paddingBottom: theme.mixins.toolbar.minHeight,
  },
  gridBottom: {
    maxWidth: '100%'
  }
}));



export default function AddressForm() {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" direction="column" className={classes.root} spacing={0}>
      <Grid item xs={11} sm={10}>
        <Paper elevation={3}>
          <Grid container spacing={6} justify="center" alignItems="center">
            <Grid item xs={11}>
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h3" gutterBottom align="center">
                    Know Your Customer (KYC) Policy
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                 
                  <Typography variant="body1" gutterBottom>
                    Know Your Customer (KYC) procedures are a critical function to assess and monitor customer risk and a legal requirement to comply with Anti-Money Laundering (AML) Laws.
                    Do you know your customer? You better, if you’re a financial institution (FI) or you face possible fines, sanctions and maybe even public ridicule if you do business with a money launderer or terrorist. More importantly, it’s a fundamental practice to protect your FI from fraud and losses due to illegal funds and transactions.
                    <br/>
                    <br/>
                    “KYC” refers to the steps taken by a financial institution (or business) to:
                    

                    <Grid item xs={12} md={6} className={classes.gridBottom}>
                      <List>
                        <ListItem
                          text={
                            'Establish customer identity'
                          }
                        />
                        <ListItem text={'Understand the nature of the customer’s activities (primary goal is to satisfy that the source of the customer’s funds is legitimate)'} />
                        <ListItem
                          text={
                            'Assess money laundering risks associated with that customer for purposes of monitoring the customer’s activities'
                          }
                        />
                       
                      </List>
                    </Grid>
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    To create and run an effective KYC program requires the following elements:

                                    </Typography>
                  <Typography variant="h4" gutterBottom>
                    A. Customer Identification Program (CIP)
                  </Typography>
                  <Typography variant="body1">
                    How do you know someone is who they say they are? After all, identity theft is widespread, affecting over 13 million US consumers and accounting for 15 billion dollars stolen in 2015. If you’re a US financial institution, it’s more than a financial risk; it’s the Law
                  </Typography>
                  
                  <Typography variant="body1">
                    The CIP mandates that any individual conducting financial transactions needs to have their identity verified. As a provision in the Patriot Act, it’s designed to limit money laundering, terrorism funding, corruption and other illegal activities. The desired outcome is that financial institutions accurately identify their customers:
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    A critical element to a successful CIP is a risk assessment, both on the institutional level and on procedures for each account. While the CIP provides guidance, it’s up to the individual institution to determine the exact level of risk and policy for that risk level.
                  </Typography>
                    <br/><br/>
                  <Typography variant="h4" gutterBottom>
                    B. Customer Due Diligence
                   </Typography>
                  <Typography variant="body1" style={{ marginBottom: '15px' }}>
                    For any financial institution, one of the first analysis made is to determine if you can trust a potential client. You need to make sure any potential customer is worthy; customer due diligence (CDD) is a critical element of effectively managing your risks and protecting yourself against criminals, terrorists, and corrupt Politically Exposed Persons (PEPs).
                    <br/>
                    There are three levels of due diligence:
                  </Typography>
                  <Typography variant="h6" gutterBottom >
                    <strong>Simplified Due Diligence (“SDD”)</strong> are situations where the risk for money laundering or terrorist funding is low and a full CDD is not necessary. For example, low value accounts or accounts where checks are being on other levels
                      <br/>
                    <strong>Basic Customer Due Diligence (“CDD”)</strong> is information obtained for all customers to verify the identity of a customer and asses the risks associated with that customer.
                      <br/>
                    <strong> Enhanced Due Diligence (“EDD”)</strong> is additional information collected for higher-risk customers to provide a deeper understanding of customer activity to mitigate associated risks. In the end, while some EDD factors are specifically enshrined in a countries legislations, it’s up to a financial institution to determine their risk and take measures to ensure that they are not dealing with bad customers.
                  </Typography>
                  <br/><br/>
                  <Typography variant="h4" gutterBottom>
                    C. Ongoing Monitoring
                   </Typography>
                   <Typography variant="body1" gutterBottom>
                    It’s not enough to just check your customer once, you need to have a program that knows your customer on an ongoing basis. The ongoing monitoring function includes oversight of financial transactions and accounts based on thresholds developed as part of a customer’s risk profile.
                      <br/>
                    Up to now, regulations call for a risk-based assessment. However, as of January 1, 2017 The New York Department of Financial Services (NYDFS) requires specific measures of transaction monitoring and filtering
                      <br/>
                    <strong>
                      KYC News Around the World<br/>
                      KYC: Knowing Your (Onboarding) Costs
                    </strong>
                          <br/>
                  
                    $60 million. $300 million. One month, four months? Welcome to the well-meaning but truly inefficient world of onboarding and KYC — where financial services firms are mired in manual processes and where wait times are forever, and expensive.
                         
                 
                  </Typography>
                   <br/>

             
                  <TypeComponent
                    head={'The unquenched longing for a transformed KYC and AML solution'}
                    text={
                      'In spite of heavy investments, FIs have been unable to optimally counter the growing peril of money laundering. Regulatory fines on FIs for KYC/AML related violations continue to rise.'
                    }
                  />
                  <TypeComponent
                    head={'Push for Aadhaar-enabled e-KYC for digital transactions'}
                    text={
                      'Aadhaar-enabled electronic know your customer (KYC) process should be “firmly established” as the acceptable KYC, a panel with representatives from all financial sector regulators has proposed.'
                    }
                  />
                  <TypeComponent
                    head={'US insurers ‘lagging behind’ in fight against financial crimes'}
                    text={
                      'Money laundering is an ever expanding problem for the American insurance industry. An increasing number of individuals are using insurance accounts to hide money from federal taxation agencies – and the industry needs to step up and tackle the situation head-on.'
                    }
                  />
                  <TypeComponent
                    head={'MAS to roll out national KYC utility for Singapore'}
                    text={
                      'The Monetary Authority of Singapore (MAS) is piloting a national know-your-customer (KYC) utility for financial services, based on the MyInfo digital identity service, jointly developed by the Ministry of Finance and GovTech, the lead agency for digital and data strategy in Singapore.'
                    }
                  />
                  <TypeComponent
                    head={'Average UK bank wastes £5 million a year on manual and inefficient KYYC processes'}

                    text={
                      'The message to all financial institutions is clear: The cost of KYC checks is much too high, placing too much reliance on inefficient and error-prone manual processes,” says Steve Pannifer, COO, Consult Hyperion.'
                    }/>
                  

                  <TypeComponent
                    head={'KYC obstacles hamper Mifid II preparations in Europe'}
                    text={
                      'Account. The contractual arrangement wherein an SALNAKA Member has accepted our Terms & Conditions and Privacy Policy, and received approval to use the SALNAKA Services.SALNAKAP Platform. Hardware and software technologies used by SALNAKA to provide the Service as set out in our Terms & Conditions.Personal Information. Information that identifies an individual, such as name, address, e-mail address, and banking details. “Personal Information” does not include anonymized and/or aggregated data that does not identify a specific user.'
                    }
                  />
                  <TypeComponent
                    head={'India KYC updates'}
                    text={
                      'The Government of India has notified six documents as ‘Officially Valid Documents’ (OVDs) for the purpose of producing proof of identity. These six documents are Passport, Driving Licence, Voters’ Identity Card, PAN Card, Aadhaar Card issued by UIDAI and NREGA Job Card.'           }
                  />
                  <TypeComponent
                    head={'Philippines KYC under review'}
                    text={
                      'Under Republic Act 9160 or the Anti-Money Laundering Act (AMLA), banks and other financial institutions, including remittance centers and pawnshops, are mandated to institute “know your customer” (KYC) rules that ensure the legitimate source of funds.'
                    }
                  />
                  <TypeComponent
                    head={'Revisions in Australia'}
                    text={
                      'AUSTRAC has revised Chapter 4 of the AML/CTF Rules in a few small but significant ways. These changes came into effect on 16 September 2016.'
                    }
                  />
                  <TypeComponent
                    head={'e-KYC in Thailand'}
                    text={
                      'The Bank of Thailand (” BOT “) has introduced a new regulation to facilitate the Know-Your-Customer (KYC) process by using an electronic means (” e-KYC “) for account opening for deposit acceptance or fund acceptance from public.'
                    }
                  />
           
                </Grid>
              </Grid>
            </Grid>
           
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
