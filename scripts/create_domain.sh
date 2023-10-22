echo "########################################################################"

DOMAIN_NAME=$1 ;

COMMON_PATH=modules

# Create Domain Directory
echo "### Creating the domain directory..."
mkdir $COMMON_PATH/$DOMAIN_NAME


# Create Structure
echo "### Creating subdirectories..."

mkdir $COMMON_PATH/$DOMAIN_NAME/api
mkdir $COMMON_PATH/$DOMAIN_NAME/components
mkdir $COMMON_PATH/$DOMAIN_NAME/contexts
mkdir $COMMON_PATH/$DOMAIN_NAME/hooks
mkdir $COMMON_PATH/$DOMAIN_NAME/reducers

echo "### Domain structure for ${DOMAIN_NAME} has been successfully created."
echo "########################################################################"