import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: theme.mixins.toolbar.minHeight,
        paddingBottom: theme.mixins.toolbar.minHeight,
    },
    gridBottom: {
        maxWidth: '100%',
    },
}));

export default function Aml() {
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
                                        Anti Money Laundering(AML)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" gutterBottom>
                                        Money laundering is defined as the process where the identity of the proceeds of
                                        crime are so disguised that it gives the appearance of legitimate income.
                                        Criminals specifically target financial services firms through which they
                                        attempt to launder criminal proceeds without the firm's knowledge or
                                        suspicions.Within the UK alone it is estimated that L23 billion is laundered on
                                        an annual basis and on globally in revenue terms the amount of money laundered
                                        would make it the third largest industry. In response to the scale and effect of
                                        money laundering the United Kingdom, in common with many other countries, has
                                        passed legislation designed to prevent money laundering and to combat terrorism.
                                        This legislation, together with regulations, rules and industry guidance, forms
                                        the cornerstone of AML/CTF obligations for UK firms and outline the offences and
                                        penalties for failing to comply.Whilst Bitstamp are currently unregulated and do
                                        not fall with the scope of the AML/CTF obligations in the UK the senior
                                        management have implemented systems and procedures that meet the UK AML
                                        legislation. This decision reflects the senior managements desire to prevent
                                        money laundering and not be used by criminals to launder proceeds of crime.UK
                                        AML LEGAL AND REGULATORY FRAMEWORK:The UK AML regime is set out in the following
                                        legislation and regulations: The Proceeds of Crime Act 2002 (POCA), as amended
                                        by the: i. Serious Organised Crime and Police Act 2005 (SOCPA); and the ii.
                                        Proceeds of Crime Act (Amendment) Regulations 2007; The Terrorism Act 2000, as
                                        amended by the: i. The Anti Terrorism, Crime & Security Act 2001; and the ii.
                                        Terrorism Act (Amendment) Regulations 2007; The Terrorism Act 2006; The Money
                                        Laundering Regulations 2007; and The Joint Money Laundering Steering Group
                                        (JMLSG) Guidance for the UK Financial Sector on the prevention of money
                                        laundering/combating terrorist financing.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        ANTI-MONEY LAUNDERING (AML) POLICY:The Bitstamp AML Policy is designed to
                                        prevent money laundering by meeting the UK AML legislation obligations including
                                        the need to have adequate systems and controls in place to mitigate the risk of
                                        the firm being used to facilitate financial crime. This AML Policy sets out the
                                        minimum standards which must be complied with and includes: The appointment of a
                                        Money Laundering Reporting Officer (MLRO) who has sufficient level of seniority
                                        and independence and who has responsibility for oversight of compliance with
                                        relevant legislation, regulations, rules and industry guidance; Establishing and
                                        maintaining a Risk Based Approach (RBA) towards assessing and managing the money
                                        laundering and terrorist financing risks to the company; Establishing and
                                        maintaining risk-based customer due diligence, identification, verification and
                                        know your customer (KYC) procedures, including enhanced due diligence for those
                                        customers presenting higher risk, such as Politically Exposed Persons (PEPs);
                                        Establishing and maintaining risk based systems and procedures to monitor
                                        on-going customer activity; Procedures for reporting suspicious activity
                                        internally and to the relevant law enforcement authorities as appropriate; The
                                        maintenance of appropriate records for the minimum prescribed periods; Training
                                        and awareness for all relevant employees SANCTIONS POLICY:Bitstamp is prohibited
                                        from transacting with individuals, companies and countries that are on
                                        prescribed Sanctions lists. Bitstamp will therefore screen against United
                                        Nations, European Union, UK Treasury and US Office of Foreign Assets Control
                                        (OFAC) sanctions lists in all jurisdictions in which we operate.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
