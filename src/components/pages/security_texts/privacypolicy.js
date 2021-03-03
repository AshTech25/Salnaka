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
import ListItem from './ListItem';
import TypeComponent from './TypographyComponent'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: theme.mixins.toolbar.minHeight,
        paddingBottom: theme.mixins.toolbar.minHeight,
    },
    gridBottom: {
      maxWidth:'100%'
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
                                        Privacy Policy
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" gutterBottom>
                                        General
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        This Privacy Policy, together with our Terms & Conditions, governs SALNAKA’s
                                        collection, processing and use of your Personal Information. Depending upon the
                                        context, "SALNAKA" may also refer to the services, products, website, content or
                                        other materials provided by SALNAKA. "Personal Information" refers to
                                        information that identifies an individual, such as name, address, e-mail
                                        address, trading information, and banking details. it does not include
                                        anonymized and/or aggregated data that does not identify a specific user.
                                        SALNAKA and its affiliates (hereinafter, "SALNAKA", "we", "us" or "our") are
                                        committed to protecting and respecting your privacy. The purpose of this Privacy
                                        Policy is to describe:
                                        <Grid item xs={12} md={6} className={classes.gridBottom}>
                                            <List>
                                                <ListItem
                                                    text={
                                                        'The types of Personal Information we collect and how it may be used'
                                                    }
                                                />
                                                <ListItem text={'Our use of cookies and similar technology'} />
                                                <ListItem
                                                    text={
                                                        'How and why we may disclose your Personal Information to third parties'
                                                    }
                                                />
                                                <ListItem
                                                    text={
                                                        '	The transfer of your Personal Information within and outside the country'
                                                    }
                                                />
                                                <ListItem
                                                    text={
                                                        'Your right to access, correct, update, and delete your Personal Information'
                                                    }
                                                />
                                                <ListItem
                                                    text={
                                                        'The security measures we use to protect and prevent the loss, misuse, or alteration of Personal Information'
                                                    }
                                                />
                                                <ListItem text={'SALNAKA’s retention of your Personal Information'} />
                                            </List>
                                        </Grid>
                                    </Typography>
                                    <Typography variant="h4" gutterBottom>
                                        COLLECTION AND USE OF PERSONAL INFORMATION
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        A. PERSONAL INFORMATION WE COLLECT
                                    </Typography>
                                    <Typography variant="body1">
                                        We collect the Personal Information you provide directly to us when you register
                                        on our web, perform any transactions on our Platform, or use our other Services.
                                        This may include:
                                    </Typography>
                                    <Grid item xs={12} md={6} className={classes.gridBottom}>
                                        <List>
                                            <ListItem
                                                text={
                                                    'Contact information, such as name, home address, and email address.'
                                                }
                                            />
                                            <ListItem text={'Our use of cookies and similar technology'} />
                                            <ListItem text={'Account information, such as username and password'} />
                                            <ListItem
                                                text={
                                                    'Financial information, such as bank account numbers, bank statement, and microfinancing details'
                                                }
                                            />
                                            <ListItem
                                                text={
                                                    'Identity verification information, such as images of your government issued National Identity Card and passport'
                                                }
                                            />
                                        </List>
                                    </Grid>
                                    <Typography variant="body1">
                                        We also automatically collect certain computer, device, and browsing information
                                        when you access the SALNAKA website or use its Services. This information is
                                        aggregated to provide statistical data about our users' browsing actions and
                                        patterns, and does not personally identify individuals. This information may
                                        include:
                                    </Typography>
                                    <Grid item xs={12} md={6} className={classes.gridBottom}>
                                        <List>
                                            <ListItem
                                                text={
                                                    'Computer or mobile device information, including IP address, operating system, browser type'
                                                }
                                            />
                                            <ListItem text={'Website usage information'} />
                                        </List>
                                    </Grid>
                                    <Typography variant="h5" gutterBottom>
                                        B. USE OF COOKIES AND SIMILAR TECHNOLOGY
                                    </Typography>
                                    <Typography variant="body1" style={{ marginBottom: '15px' }}>
                                        The SALNAKA’s website is using cookies. Cookies are small text files that are
                                        placed on your computer by websites that you visit. They are widely used in
                                        order to make websites work, or work more efficiently, as well as to provide
                                        information to the owners of the site. Cookies are typically stored on your
                                        computer's hard drive. Information collected from cookies is used by us to
                                        evaluate the effectiveness of our Site, analyze trends, and administer the
                                        Platform. The information collected from cookies allows us to determine such
                                        things as which parts of our Site are most visited and difficulties our visitors
                                        may experience in accessing our Site. With this knowledge, we can improve the
                                        quality of your experience on the Platform by recognizing and delivering more of
                                        the most desired features and information, as well as by resolving access
                                        difficulties. We also use cookies and/or a technology known as web bugs or clear
                                        gifs, which are typically stored in emails to help us confirm your receipt of,
                                        and response to, our emails and to provide you with a more personalized
                                        experience when using our Site.
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        C. HOW WE USE YOUR PERSONAL INFORMATION
                                    </Typography>
                                    <Typography variant="body1">We may use your Personal Information to:</Typography>
                                    <Grid item xs={12} md={6} className={classes.gridBottom}>
                                        <List>
                                            <ListItem
                                                text={
                                                    'Process your SALNAKA transactions. We will process your Personal Information only for the purpose(s) for which it has been provided to us'
                                                }
                                            />
                                            <ListItem text={'Personalize your SALNAKA Services experience'} />
                                            <ListItem
                                                text={
                                                    'Analyze SALNAKA website usage, and improve our website and website offerings'
                                                }
                                            />

                                            <ListItem
                                                text={
                                                    'Help us respond to your customer service requests and support needs'
                                                }
                                            />
                                            <ListItem
                                                text={
                                                    'Contact you about SALNAKA Services. The email address you provide may be used to communicate information and updates related to your use of the SALNAKA Services. We may also occasionally communicate company news, updates, promotions, and related information relating to similar products and services provided by SALNAKA'
                                                }
                                            />
                                            <ListItem
                                                text={
                                                    'Administer a contest, promotion, survey or other site feature as will be more explained on the website'
                                                }
                                            />
                                        </List>
                                    </Grid>
                                    <TypeComponent
                                        head={'EXTERNAL WEBSITES'}
                                        text={
                                            'Occasionally, the SALNAKA website may provide references or links to other websites ("External Websites"). We do not control these External Websites third party sites or any of the content contained therein. You agree that we are in no way responsible or liable for External Websites referenced or linked from the SALNAKA website, including, but not limited to, website content, policies, failures, promotions, products, services or actions and/or any damages, losses, failures or problems caused by, related to, or arising from those sites.External Websites have separate and independent privacy policies. We encourage you to review the policies, rules, terms, and regulations of each site that you visit. We seek to protect the integrity of our site and welcome any feedback about External Website information provided on the SALNAKA website.'
                                        }
                                    />
                                    <TypeComponent
                                        head={'ACCESS RIGHTS TO PERSONAL INFORMATION'}
                                        text={
                                            'You have the right to access your Personal Information to correct, update, and block inaccurate and/or incorrect data. To exercise this right, you can update your correct or update information in your SALNAKA account.s'
                                        }
                                    />
                                    <TypeComponent
                                        head={'SECURITY OF PERSONAL INFORMATION'}
                                        text={
                                            'We use a variety of security measures to ensure the confidentiality of your Personal Information, and to protect your Personal Information from loss, theft, unauthorised access, misuse, alteration or destruction.Only authorized SALNAKA personnel are permitted access to your financially sensitive and/or credit information and Personal Information, and these personnel are required to treat the information as highly confidential.'
                                        }
                                    />
                                    <TypeComponent
                                        head={'RETENTION OF PERSONAL INFORMATION'}
                                        text={
                                            'We retain Personal Information for as long as necessary to fulfil purposes described in this Privacy Policy, subject to our own legal and regulatory obligations. In accordance with our record keeping obligations, we will retain Account and other Personal Information for lifetime after an Account is closed.'
                                        }
                                    />
                                    <TypeComponent
                                        head={'UPDATES TO THIS PRIVACY POLICY'}
                                        text={
                                            'This Privacy Policy may be revised, modified, updated and/or supplemented at any time, without prior notice, at the sole decision of SALNAKA. When we make changes to this Privacy Policy, we will notify all users on our website, and make the amended Privacy Policy available on our website.'
                                        }
                                    />

                                    <TypeComponent
                                        head={'DEFINITIONS'}
                                        text={
                                            'Account. The contractual arrangement wherein an SALNAKA Member has accepted our Terms & Conditions and Privacy Policy, and received approval to use the SALNAKA Services.SALNAKAP Platform. Hardware and software technologies used by SALNAKA to provide the Service as set out in our Terms & Conditions.Personal Information. Information that identifies an individual, such as name, address, e-mail address, and banking details. “Personal Information” does not include anonymized and/or aggregated data that does not identify a specific user.'
                                        }
                                    />
                                    <TypeComponent
                                        head={'Contact Us'}
                                        text={
                                            'Please contact us with questions, comments, or concerns regarding our Privacy Policy and/or practices at '
                                        }
                                    />
                                    <Link href="#" variant="body2">
                                        Admin@SALNAKA.com
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={11}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" size="large" endIcon={<SendIcon />}>
                                        Send
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
