# Mobx React Form Demo

# Setup

In order to link the demo to the master clone both the branch as follows:

```bash
❯ git clone -b master git@github.com:foxhound87/mobx-react-form.git mobx-react-form--master
❯ git clone -b demo git@github.com:foxhound87/mobx-react-form.git mobx-react-form--demo
```

then we have different directories for each branch like this:

* mobx-react-form--master   // branch: master
* mobx-react-form--demo     // branch: demo

and now create a symlink respectively into both directories:

```bash
❯ ln -s ../mobx-react-form--demo ./mobx-react-form--master/demo
❯ ln -s ../mobx-react-form--master ./mobx-react-form--demo/master
```

# Run

```bash
❯ npm install // in both master and demo repos
❯ npm start // in demo repo
```
