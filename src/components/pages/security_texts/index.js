import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: theme.mixins.toolbar.minHeight,
        paddingBottom: theme.mixins.toolbar.minHeight,
    },
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
                                    <Typography variant="h4" gutterBottom align="center">
                                        Terms and Conditions
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" gutterBottom>
                                        Your access to the site and utilization of the programs dependent on the
                                        acceptance and obedience of these specified terms and conditions. By agreeing
                                        these terms & conditions you also consent to the accompanying Terms &
                                        Conditions. Make sure that you completely behold the terms & conditions. As an
                                        independent body we reserve a right to modify or add new terms & conditions in
                                        this statement. SALNAKA is allowed to make corrections to this Membership
                                        Agreement with no prior notice. We are allowed to bring updates, introduce
                                        options or removals to already defined terms and conditions. Members are
                                        expected to be sure of the latest updates in the most recent terms and
                                        conditions by inspecting the official networks and site all the time. Upon
                                        disagreeing the particular terms & conditions you are immediately required to
                                        stop using this program and accessing the site. Who Is Eligible? Clients that
                                        are reached above 18 years of age or more can check out in SALNAKA promoting
                                        programs. Universal individuals can take part in SALNAKA programs excluding the
                                        regions where administering laws are imposed and people are restricted to join
                                        such programs. The accompanying people; All workers and different specialists
                                        coordinating with SALNAKA or anybody related with these people including
                                        guardians, close relatives, for example, mother, father, sibling, sister, child,
                                        girl, mate, contractual workers, auxiliaries, partner organizations and
                                        administration offices, are qualified to take an interest in SALNAKA projects
                                        and this is to guarantee secrecy of the organization's publicizing program.
                                        Users Responsibilities: 1. By utilizing our program, you affirm to utilize your
                                        own name as narrated on your National ID Card, email address and exact contact
                                        data. You agree not to utilize any false character. 2. User will report all
                                        unapproved access to their accounts quickly to SALNAKA to guarantee their own
                                        security and the privacy of the SALNAKA system. 3. SALNAKA is allowed to
                                        terminate the client accounts at its very own attention for reasons, for
                                        example, any wrong or unlawful utilization of the account or utilizing some
                                        other program. Obligation: SALNAKA shall not be considered accountable for any
                                        or all loss of benefits, business opportunities either direct or indirect,
                                        damages that might be both incidental and substantial pertaining to this
                                        agreement or through your use of the website. At any point of time, the
                                        aggregate liability will not surpass the total fee paid or payable to the user
                                        pertaining to this agreement. SALNAKA is not claiming to make any direct or
                                        indirect warranties or representations that the operation of our website &
                                        Android Apps will be absolutely error free or uninterrupted. The errors that
                                        might occur in this website or the disruptions that might be experienced do not
                                        make the company accountable in any way for the damages or the losses endured by
                                        the user. SALNAKA likewise shall also not be held responsible for any loss or
                                        damage that results due to electronic loss of any data, malware or virus
                                        infection of the user’s PC or other digital causes that may result from the
                                        utilization of our website. SALNAKA is not obligated to pay for the repairs,
                                        fixes of any such nature, for virus removal or other damages in all such
                                        instances. The member or the user is expected to assume complete responsibility
                                        for their online security including the use of appropriate antivirus and
                                        antimalware software and keeping them up to date. Misuse of Account Such As
                                        Selling or Renting: Users are strictly prohibited from selling or renting their
                                        account. Accounts suspected of such activities will have restricted access and
                                        could be terminated. Relationship with SALNAKA: Clients are not the barely piece
                                        eligible to fit for any involvement, establishment, business relationship,
                                        office or joint venture with SALNAKA through this statement. Clients don't have
                                        any expertise to address to SALNAKA at any dimension nor do they possess any
                                        power to recognize or make any offers in the interest of SALNAKA at any time.
                                        The member is absolutely responsible for meeting their very own duty on the
                                        income side, whichever is generated from or through SALNAKA. Reimbursement: By
                                        utilizing our site and its administrations you agree that you will compensate
                                        and hold every partner of SALNAKA, including its proprietors, chiefs,
                                        representatives, individuals and operators. Inoffensive from all liabilities and
                                        harms including however not constrained to lawyer charge and other legitimate
                                        costs. Utilization of Third-Party Websites: SALNAKA does not review any content
                                        from third-party websites. Clicking on such sites is always on the burden of
                                        your own risk and will. We are not responsible to have any control over those
                                        third-party websites. SALNAKA also does not monitor these websites directly or
                                        indirectly and also does not assure for their safety or credibility. It is the
                                        responsibility of the user to verify the credibility and insure their well being
                                        from the third-party website links featured here at SALNAKA. We do not recommend
                                        any service, website or product here at SALNAKA. Members are keenly advised to
                                        read these terms and conditions carefully.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={11}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button href="/contact-us" variant="contained" color="primary" size="large" endIcon={<SendIcon />}>
                                        Contact Us
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
