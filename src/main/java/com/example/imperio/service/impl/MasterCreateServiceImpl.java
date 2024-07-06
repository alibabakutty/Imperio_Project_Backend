package com.example.imperio.service.impl;


import com.example.imperio.dto.*;
import com.example.imperio.entity.*;
import com.example.imperio.exception.ResourceNotFoundException;
import com.example.imperio.mapper.*;
import com.example.imperio.repository.*;
import com.example.imperio.service.MasterCreateService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MasterCreateServiceImpl implements MasterCreateService {

    @Autowired
    private RegionMasterDAO regionMasterDAO;


    @Autowired
    private ExecutiveMasterDAO executiveMasterDAO;

    @Autowired
    private DistributorMasterDAO distributorMasterDAO;

    @Autowired
    private ProductMasterDAO productMasterDAO;

    @Autowired
    private GodownMasterCreateDAO godownMasterCreateDAO;

    @Autowired
    private UnitMasterDAO unitMasterDAO;

    @Autowired
    private VoucherTypeDAO voucherTypeDAO;

    @Autowired
    private VoucherTypeMasterDAO voucherTypeMasterDAO;

    @Autowired
    private LedgerMasterDAO ledgerMasterDAO;

    @Override
    public RegionMasterCreateDto createRegionMaster(RegionMasterCreateDto regionMasterCreateDto){


        // Validate the region object
        validateRegionMaster(regionMasterCreateDto);


        // Check for duplicate entry
        if (regionMasterDAO.existsByRegionMasterId(regionMasterCreateDto.getRegionMasterId())) {
            throw new DuplicateKeyException("Duplicate entry for unique field: " + regionMasterCreateDto.getRegionMasterId());
        }



        RegionMasterCreate regionMasterCreate = RegionMasterCreateMapper.mapToRegionMasterCreate(regionMasterCreateDto);

        RegionMasterCreate savedRegionMasterCreate = regionMasterDAO.save(regionMasterCreate);

        return RegionMasterCreateMapper.mapToRegionMasterCreateDto(savedRegionMasterCreate);
    }

    private void validateRegionMaster(RegionMasterCreateDto regionMasterCreateDto){

        if(regionMasterCreateDto.getRegionMasterId() == null || regionMasterCreateDto.getRegionMasterId().isEmpty()){

            throw new IllegalArgumentException("Unique field cannot be empty");
        }
    }


    @Override
    public RegionMasterCreateDto getRegionMaster(String regionMasterId){

        RegionMasterCreate regionMasterCreate = regionMasterDAO.findById(regionMasterId).orElseThrow(() ->
                new ResourceNotFoundException("Region is not found with this name:" + regionMasterId));

        return RegionMasterCreateMapper.mapToRegionMasterCreateDto(regionMasterCreate);
    }


    @Override
    public List<RegionMasterCreateDto> getAllRegionMasterIds(){

        List<RegionMasterCreate> regionMasterCreate = regionMasterDAO.findAll();
        return regionMasterCreate.stream().map(RegionMasterCreateMapper::mapToRegionMasterCreateDto).toList();
    }


    @Override
    public ExecutiveMasterCreateDto createExecutiveMaster(ExecutiveMasterCreateDto executiveMasterCreateDto){


        // Validate the executive object
        validateExecutiveMaster(executiveMasterCreateDto);

        // Check for duplicate entry
        if(executiveMasterDAO.existsByExecutiveCode(executiveMasterCreateDto.getExecutiveCode())){

            throw new DuplicateKeyException("Duplicate entry for unique field:" + executiveMasterCreateDto.getExecutiveCode());

        }


        ExecutiveMasterCreate executiveMasterCreate = ExecutiveMasterCreateMapper.mapToExecutiveMasterCreate(executiveMasterCreateDto);

        ExecutiveMasterCreate savedExecutiveMasterCreate = executiveMasterDAO.save(executiveMasterCreate);

        return ExecutiveMasterCreateMapper.mapToExecutiveMasterCreateDto(savedExecutiveMasterCreate);

    }


    private void validateExecutiveMaster(ExecutiveMasterCreateDto executiveMasterCreateDto){

        if(executiveMasterCreateDto.getExecutiveCode() == null || executiveMasterCreateDto.getExecutiveCode().isEmpty()){

            throw new IllegalArgumentException("Unique field cannot be empty");
        }
    }

    @Override
    public ExecutiveMasterCreateDto getExecutiveMaster(String executiveCode){

        ExecutiveMasterCreate executiveMasterCreate = executiveMasterDAO.findById(executiveCode).orElseThrow(() ->


                new ResourceNotFoundException("Executive is not found with this name:" + executiveCode));

        return ExecutiveMasterCreateMapper.mapToExecutiveMasterCreateDto(executiveMasterCreate);
    }

    @Override
    public List<ExecutiveMasterCreateDto> getAllExecutiveMasterCodes(){

        List<ExecutiveMasterCreate> executiveMasterCreate = executiveMasterDAO.findAll();

        return executiveMasterCreate.stream().map(ExecutiveMasterCreateMapper::mapToExecutiveMasterCreateDto).toList();
    }


    @Override
    public DistributorMasterCreateDto createDistributorMaster(DistributorMasterCreateDto distributorMasterCreateDto){


        // Validate the distributor object
        validateDistributorMaster(distributorMasterCreateDto);


        // Check for duplicate entry
        if(distributorMasterDAO.existsByDistributorCode(distributorMasterCreateDto.getDistributorCode())){

            throw new DuplicateKeyException("Duplicate entry for unique field:" + distributorMasterCreateDto.getDistributorCode());

        }

        DistributorMasterCreate distributorMasterCreate = DistributorMasterCreateMapper.mapToDistributorMasterCreate(distributorMasterCreateDto);

        DistributorMasterCreate savedDistributorMasterCreate = distributorMasterDAO.save(distributorMasterCreate);

        return DistributorMasterCreateMapper.mapToDistributorMasterCreateDto(savedDistributorMasterCreate);
    }


    private void validateDistributorMaster(DistributorMasterCreateDto distributorMasterCreateDto){

        if(distributorMasterCreateDto.getDistributorCode() == null || distributorMasterCreateDto.getDistributorCode().isEmpty()){

            throw new IllegalArgumentException("Unique field cannot be empty");
        }
    }


    @Override
    public DistributorMasterCreateDto getDistributorMaster(String distributorCode){

        DistributorMasterCreate distributorMasterCreate = distributorMasterDAO.findById(distributorCode).orElseThrow(() ->


                new ResourceNotFoundException("Distributor is not found with this name:" + distributorCode));

        return DistributorMasterCreateMapper.mapToDistributorMasterCreateDto(distributorMasterCreate);
    }

    @Override
    public List<DistributorMasterCreateDto> getAllDistributorMaterCodes(){

        List<DistributorMasterCreate> distributorMasterCreate = distributorMasterDAO.findAll();

        return distributorMasterCreate.stream().map(DistributorMasterCreateMapper::mapToDistributorMasterCreateDto).toList();

    }

    @Override
    public ProductMasterCreateDto createProductMaster(ProductMasterCreateDto productMasterCreateDto){

        // Validate the distributor object
        validateProductMaster(productMasterCreateDto);

        // Check for duplicate entry
        if (productMasterDAO.existsByProductCode(productMasterCreateDto.getProductCode())){

            throw new DuplicateKeyException("Duplicate entry for unique field:" + productMasterCreateDto.getProductCode());
        }


        ProductMasterCreate productMasterCreate = ProductMasterCreateMapper.mapToProductMasterCreate(productMasterCreateDto);

        ProductMasterCreate savedProductMasterCreate = productMasterDAO.save(productMasterCreate);

        return ProductMasterCreateMapper.mapToProductMasterCreateDto(savedProductMasterCreate);

    }


    private void validateProductMaster(ProductMasterCreateDto productMasterCreateDto){

        if(productMasterCreateDto.getProductCode() == null || productMasterCreateDto.getProductCode().isEmpty()){

            throw new IllegalArgumentException("Unique field cannot be empty");

        }
    }


    @Override
    public ProductMasterCreateDto getProductMaster(String productCode){

        ProductMasterCreate productMasterCreate = productMasterDAO.findById(productCode).orElseThrow(()->
                new ResourceNotFoundException("Product is not found with this name:" + productCode));

        return ProductMasterCreateMapper.mapToProductMasterCreateDto(productMasterCreate);
    }

    @Override
    public List<ProductMasterCreateDto> getAllProductMasterCodes(){

        List<ProductMasterCreate> productMasterCreate = productMasterDAO.findAll();

        return productMasterCreate.stream().map(ProductMasterCreateMapper::mapToProductMasterCreateDto).toList();

    }

    @Override
    public GodownMasterCreateDto createGodownMaster(GodownMasterCreateDto godownMasterCreateDto){


        // Validate the region object
        validateGodownMaster(godownMasterCreateDto);


        // Check for duplicate entry
        if(godownMasterCreateDAO.existsByGodownCode(godownMasterCreateDto.getGodownCode())){
            throw new DuplicateKeyException("Duplicate entry for unique field:" + godownMasterCreateDto.getGodownCode());
        }


        GodownMasterCreate godownMasterCreate = GodownMasterCreateMapper.mapToGodownMasterCreate(godownMasterCreateDto);

        GodownMasterCreate savedGodownMasterCreate = godownMasterCreateDAO.save(godownMasterCreate);

        return GodownMasterCreateMapper.mapToGodownMasterCreateDto(savedGodownMasterCreate);

    }


    private void validateGodownMaster(GodownMasterCreateDto godownMasterCreateDto){
        if(godownMasterCreateDto.getGodownCode() == null || godownMasterCreateDto.getGodownCode().isEmpty()){
            throw new IllegalArgumentException("Unique field cannot be empty");
        }
    }




    @Override
    public GodownMasterCreateDto getGodownMaster(String godownCode){
        GodownMasterCreate godownMasterCreate = godownMasterCreateDAO.findById(godownCode).orElseThrow(()->

                new ResourceNotFoundException("Godown is not found with this name:" + godownCode));

        return GodownMasterCreateMapper.mapToGodownMasterCreateDto(godownMasterCreate);

    }


    @Override
    public List<GodownMasterCreateDto> getAllGodownMasterCodes(){

        List<GodownMasterCreate> godownMasterCreate = godownMasterCreateDAO.findAll();


        return godownMasterCreate.stream().map(GodownMasterCreateMapper::mapToGodownMasterCreateDto).toList();

    }


    @Override
    public UnitMasterCreateDto createUnitMaster(UnitMasterCreateDto unitMasterCreateDto){

        // Validate the unit object
        validateUnitMaster(unitMasterCreateDto);

        // Check for duplicate entry
        if(unitMasterDAO.existsByProductUom(unitMasterCreateDto.getProductUom())){
            throw new DuplicateKeyException("Duplicate entry for unique field:" + unitMasterCreateDto.getProductUom());
        }

        UnitMasterCreate unitMasterCreate = UnitMasterCreateMapper.mapToUnitMasterCreate(unitMasterCreateDto);

        UnitMasterCreate savedUnitMasterCreate = unitMasterDAO.save(unitMasterCreate);

        return UnitMasterCreateMapper.mapToUnitMasterCreateDto(savedUnitMasterCreate);

    }


    private void validateUnitMaster(UnitMasterCreateDto unitMasterCreateDto){
        if(unitMasterCreateDto.getProductUom() == null || unitMasterCreateDto.getProductUom().isEmpty()){
            throw new IllegalArgumentException("Unique field cannot be empty!");
        }
    }

    @Override
    public UnitMasterCreateDto getUnitMaster(String productUom){
        UnitMasterCreate unitMasterCreate = unitMasterDAO.findById(productUom).orElseThrow(()->

                new ResourceNotFoundException("Unit is not found with this name:" + productUom));

        return UnitMasterCreateMapper.mapToUnitMasterCreateDto(unitMasterCreate);


    }

    @Override
    public List<UnitMasterCreateDto> getAllUnits(){

        List<UnitMasterCreate> unitMasterCreate = unitMasterDAO.findAll();

        return unitMasterCreate.stream().map(UnitMasterCreateMapper::mapToUnitMasterCreateDto).toList();

    }


    @Override
    public RegionMasterCreateDto updateRegion(String regionMasterId, RegionMasterCreateDto updatedRegion){

        RegionMasterCreate regionMasterCreate = regionMasterDAO.findById(regionMasterId).orElseThrow(() ->

                new ResourceNotFoundException("Region is not found with the given name: " + regionMasterId));

        regionMasterCreate.setRegionMasterId(updatedRegion.getRegionMasterId());
        regionMasterCreate.setRegionName(updatedRegion.getRegionName());
        regionMasterCreate.setRegionState(updatedRegion.getRegionState());
        regionMasterCreate.setCountry(updatedRegion.getCountry());

        RegionMasterCreate regionMasterCreateObj = regionMasterDAO.save(regionMasterCreate);

        return RegionMasterCreateMapper.mapToRegionMasterCreateDto(regionMasterCreateObj);

    }

    @Override
    public ExecutiveMasterCreateDto updateExecutive(String executiveCode, ExecutiveMasterCreateDto updatedExecutive){

        ExecutiveMasterCreate executiveMasterCreate = executiveMasterDAO.findById(executiveCode).orElseThrow(() ->

                new ResourceNotFoundException("Executive is not found with the given name: " + executiveCode));

        executiveMasterCreate.setExecutiveCode(updatedExecutive.getExecutiveCode());
        executiveMasterCreate.setExecutiveMaster(updatedExecutive.getExecutiveMaster());
        executiveMasterCreate.setDateOfJoin(updatedExecutive.getDateOfJoin());
        executiveMasterCreate.setMobileNo(updatedExecutive.getMobileNo());
        executiveMasterCreate.setEmailId(updatedExecutive.getEmailId());
        executiveMasterCreate.setStatus(updatedExecutive.getStatus());

        ExecutiveMasterCreate executiveMasterCreateObj = executiveMasterDAO.save(executiveMasterCreate);

        return ExecutiveMasterCreateMapper.mapToExecutiveMasterCreateDto(executiveMasterCreateObj);
    }

    @Override
    public DistributorMasterCreateDto updateDistributor(String distributorCode, DistributorMasterCreateDto updatedDistributor){

        DistributorMasterCreate distributorMasterCreate = distributorMasterDAO.findById(distributorCode).orElseThrow(() ->

                new ResourceNotFoundException("Distributor is not found with this given name:" + distributorCode));


        distributorMasterCreate.setDistributorCode(updatedDistributor.getDistributorCode());
        distributorMasterCreate.setDistributorCompanyName(updatedDistributor.getDistributorCompanyName());
        distributorMasterCreate.setDistributorOwnerName(updatedDistributor.getDistributorOwnerName());
        distributorMasterCreate.setMobileNo(updatedDistributor.getMobileNo());
        distributorMasterCreate.setExecutiveCode(updatedDistributor.getExecutiveCode());
        distributorMasterCreate.setExecutiveMaster(updatedDistributor.getExecutiveMaster());
        distributorMasterCreate.setRegionCode(updatedDistributor.getRegionCode());
        distributorMasterCreate.setRegionMaster(updatedDistributor.getRegionMaster());
        distributorMasterCreate.setContactPersonName(updatedDistributor.getContactPersonName());
        distributorMasterCreate.setContactMobileNo(updatedDistributor.getContactMobileNo());


        DistributorMasterCreate distributorMasterCreateObj = distributorMasterDAO.save(distributorMasterCreate);

        return DistributorMasterCreateMapper.mapToDistributorMasterCreateDto(distributorMasterCreateObj);

    }


    @Override
    public ProductMasterCreateDto updateProduct(String productCode, ProductMasterCreateDto updatedProduct){

        ProductMasterCreate productMasterCreate = productMasterDAO.findById(productCode).orElseThrow(() ->


                new ResourceNotFoundException("Product is not found with the given name:" + productCode));


        productMasterCreate.setProductCode(updatedProduct.getProductCode());
        productMasterCreate.setProductDescription(updatedProduct.getProductDescription());
        productMasterCreate.setProductCategory(updatedProduct.getProductCategory());
        productMasterCreate.setProductUom(updatedProduct.getProductUom());
        productMasterCreate.setProductGroup(updatedProduct.getProductGroup());
        productMasterCreate.setStandardCost(updatedProduct.getStandardCost());
        productMasterCreate.setSellingPrice(updatedProduct.getSellingPrice());
        productMasterCreate.setDiscount(updatedProduct.getDiscount());

        ProductMasterCreate productMasterCreateObj = productMasterDAO.save(productMasterCreate);

        return ProductMasterCreateMapper.mapToProductMasterCreateDto(productMasterCreateObj);


    }

    @Override
    public  GodownMasterCreateDto updateGodown(String godownCode, GodownMasterCreateDto updatedGodown){
        GodownMasterCreate godownMasterCreate = godownMasterCreateDAO.findById(godownCode).orElseThrow(()->
                new ResourceNotFoundException("Godown is not found with the given name:" + godownCode));


        godownMasterCreate.setGodownCode(updatedGodown.getGodownCode());
        godownMasterCreate.setGodownName(updatedGodown.getGodownName());

        GodownMasterCreate godownMasterCreateObj = godownMasterCreateDAO.save(godownMasterCreate);

        return GodownMasterCreateMapper.mapToGodownMasterCreateDto(godownMasterCreateObj);
    }

    @Override
    public void deleteRegion(String regionMasterId){

        RegionMasterCreate regionMasterCreate = regionMasterDAO.findById(regionMasterId).orElseThrow(() ->

                new ResourceNotFoundException("Region is not exists with the given name: " + regionMasterId));

        regionMasterDAO.deleteById(regionMasterId);
    }

    @Override
    public void deleteExecutive(String executiveCode){

        ExecutiveMasterCreate executiveMasterCreate = executiveMasterDAO.findById(executiveCode).orElseThrow(() ->

                new ResourceNotFoundException("Executive is not exists with this given name: " + executiveCode));

        executiveMasterDAO.deleteById(executiveCode);
    }

    @Override
    public void deleteDistributor(String distributorCode){

        DistributorMasterCreate distributorMasterCreate = distributorMasterDAO.findById(distributorCode).orElseThrow(() ->

                new ResourceNotFoundException("Distributor is not exists with this given name: " + distributorCode));

        distributorMasterDAO.deleteById(distributorCode);

    }

    @Override
    public void deleteProduct(String productCode){

        ProductMasterCreate productMasterCreate = productMasterDAO.findById(productCode).orElseThrow(() ->

                new ResourceNotFoundException("Product is not exists with this given name: " + productCode));

        productMasterDAO.deleteById(productCode);

    }

    @Override
    public void deleteGodown(String godownCode){
        GodownMasterCreate godownMasterCreate = godownMasterCreateDAO.findById(godownCode).orElseThrow(()->

                new ResourceNotFoundException("Godown is not exists with the given name:" + godownCode));

        godownMasterCreateDAO.deleteById(godownCode);
    }

    @Override
    public void deleteUnit(String uom){

        UnitMasterCreate unitMasterCreate = unitMasterDAO.findById(uom).orElseThrow(()->

                new ResourceNotFoundException("Units is not found with this name:" + uom));

        unitMasterDAO.deleteById(uom);

    }

    @Override
    public VoucherTypeCreateDto createVoucherType(VoucherTypeCreateDto voucherTypeCreateDto){

        //validate voucher type object
        validateVoucher(voucherTypeCreateDto);

        //check for duplicate entry
        if(voucherTypeDAO.existsByVoucherType(voucherTypeCreateDto.getVoucherType())){
            throw new DuplicateKeyException("Duplicate entry for unique field:" + voucherTypeCreateDto.getVoucherType());
        }

        VoucherTypeCreate voucherTypeCreate = VoucherTypeMapper.mapToVoucherTypeMasterCreate(voucherTypeCreateDto);

        VoucherTypeCreate savedVoucherTypeCreate = voucherTypeDAO.save(voucherTypeCreate);

        return VoucherTypeMapper.mapToVoucherTypeMasterCreateDto(savedVoucherTypeCreate);

    };


    private void validateVoucher(VoucherTypeCreateDto voucherTypeCreateDto){

        if(voucherTypeCreateDto.getVoucherType() == null || voucherTypeCreateDto.getVoucherType().isEmpty()){
            throw new IllegalArgumentException("Unique field cannot be empty");
        }
    }

    @Override
    public VoucherTypeCreateDto getVoucherType(String voucherType){

        VoucherTypeCreate voucherTypeCreate = voucherTypeDAO.findById(voucherType).orElseThrow(() ->

                new ResourceNotFoundException("Voucher Type is not found with this name:" + voucherType));

        return VoucherTypeMapper.mapToVoucherTypeMasterCreateDto(voucherTypeCreate);
    }

    @Override
    public List<VoucherTypeCreateDto> getAllVoucherTypes(){

        List<VoucherTypeCreate> voucherTypeCreate = voucherTypeDAO.findAll();

        return voucherTypeCreate.stream().map(VoucherTypeMapper::mapToVoucherTypeMasterCreateDto).toList();
    }

    @Override
    public void deleteVoucherType(String voucherType){
        VoucherTypeCreate voucherTypeCreate = voucherTypeDAO.findById(voucherType).orElseThrow(()->

                new ResourceNotFoundException("Voucher Type is not found with this name:" + voucherType));

        voucherTypeDAO.deleteById(voucherType);
    }

    @Override
    public VoucherTypeMasterCreateDto createVoucherTypeMaster(VoucherTypeMasterCreateDto voucherTypeMasterCreateDto){

        //validate voucher type name object
        validateVoucherTypeMaster(voucherTypeMasterCreateDto);

        //check for duplicate entry
        if(voucherTypeMasterDAO.existsByVoucherTypeName(voucherTypeMasterCreateDto.getVoucherTypeName())){
            throw new DuplicateKeyException("Duplicate entry for unique field:" + voucherTypeMasterCreateDto.getVoucherTypeName());
        }

        VoucherTypeMasterCreate voucherTypeMasterCreate = VoucherTypeMasterCreateMapper.mapToVoucherTypeMasterCreate(voucherTypeMasterCreateDto);

        VoucherTypeMasterCreate savedVoucherTypeMasterCreate = voucherTypeMasterDAO.save(voucherTypeMasterCreate);

        return VoucherTypeMasterCreateMapper.mapToVoucherTypeMasterCreateDto(savedVoucherTypeMasterCreate);


    };


    private void validateVoucherTypeMaster(VoucherTypeMasterCreateDto voucherTypeMasterCreateDto){

        if(voucherTypeMasterCreateDto.getVoucherTypeName() == null || voucherTypeMasterCreateDto.getVoucherTypeName().isEmpty()){
            throw new IllegalArgumentException("Unique field cannot be empty");
        }
    }

    @Override
    public VoucherTypeMasterCreateDto getVoucherTypeName(String voucherTypeName){
        VoucherTypeMasterCreate voucherTypeMasterCreate = voucherTypeMasterDAO.findById(voucherTypeName).orElseThrow(() ->

                new ResourceNotFoundException("Voucher Type Name is not found with this name:" + voucherTypeName));

        return VoucherTypeMasterCreateMapper.mapToVoucherTypeMasterCreateDto(voucherTypeMasterCreate);

    }

    @Override
    public List<VoucherTypeMasterCreateDto> getAllVoucherTypeNames(){

        List<VoucherTypeMasterCreate> voucherTypeMasterCreate = voucherTypeMasterDAO.findAll();

        return voucherTypeMasterCreate.stream().map(VoucherTypeMasterCreateMapper::mapToVoucherTypeMasterCreateDto).toList();
    }


    @Override
    public VoucherTypeMasterCreateDto updateVoucherTypeMaster(String voucherTypeName, VoucherTypeMasterCreateDto updatedVoucherTypeMaster){

        VoucherTypeMasterCreate voucherTypeMasterCreate = voucherTypeMasterDAO.findById(voucherTypeName).orElseThrow(()->

                new ResourceNotFoundException("Voucher Type Name is not found with the given name:" + voucherTypeName));

        voucherTypeMasterCreate.setVoucherTypeName(updatedVoucherTypeMaster.getVoucherTypeName());
        voucherTypeMasterCreate.setVoucherType(updatedVoucherTypeMaster.getVoucherType());
        voucherTypeMasterCreate.setMethodOfVoucherNumbering(updatedVoucherTypeMaster.getMethodOfVoucherNumbering());
        voucherTypeMasterCreate.setAlterAdditionalNumberingDetails(updatedVoucherTypeMaster.getAlterAdditionalNumberingDetails());
        voucherTypeMasterCreate.setStartingNumber(updatedVoucherTypeMaster.getStartingNumber());
        voucherTypeMasterCreate.setWidthOfNumericalPart(updatedVoucherTypeMaster.getWidthOfNumericalPart());
        voucherTypeMasterCreate.setPrefillWithZero(updatedVoucherTypeMaster.getPrefillWithZero());
        voucherTypeMasterCreate.setRestartNumberingApplicationForm(updatedVoucherTypeMaster.getRestartNumberingApplicationForm());
        voucherTypeMasterCreate.setRestartNumberingStartingNumber(updatedVoucherTypeMaster.getRestartNumberingStartingNumber());
        voucherTypeMasterCreate.setRestartNumberingPeriodicity(updatedVoucherTypeMaster.getRestartNumberingPeriodicity());
        voucherTypeMasterCreate.setPrefixDetailsApplicationForm(updatedVoucherTypeMaster.getPrefixDetailsApplicationForm());
        voucherTypeMasterCreate.setPrefixDetailsParticulars(updatedVoucherTypeMaster.getPrefixDetailsParticulars());
        voucherTypeMasterCreate.setSuffixDetailsApplicationForm(updatedVoucherTypeMaster.getSuffixDetailsApplicationForm());
        voucherTypeMasterCreate.setSuffixDetailsParticulars(updatedVoucherTypeMaster.getSuffixDetailsParticulars());
        voucherTypeMasterCreate.setPrintingVoucherAfterSaving(updatedVoucherTypeMaster.getPrintingVoucherAfterSaving());
        voucherTypeMasterCreate.setNameOfClass(updatedVoucherTypeMaster.getNameOfClass());


        VoucherTypeMasterCreate voucherTypeMasterCreateObj = voucherTypeMasterDAO.save(voucherTypeMasterCreate);

        return VoucherTypeMasterCreateMapper.mapToVoucherTypeMasterCreateDto(voucherTypeMasterCreateObj);

    }


    @Override
    public void deleteVoucherTypeMaster(String voucherTypeName){

        VoucherTypeMasterCreate voucherTypeMasterCreate = voucherTypeMasterDAO.findById(voucherTypeName).orElseThrow(()->

                new ResourceNotFoundException("Voucher Type Name is not found with the given name:" + voucherTypeName));

        voucherTypeMasterDAO.deleteById(voucherTypeName);

    }

    @Override
    public LedgerMasterCreateDto createLedgerMaster(LedgerMasterCreateDto ledgerMasterCreateDto){

        // validate ledger object
        validateLedgerTypeMaster(ledgerMasterCreateDto);

        // check for duplicate entry
        if(ledgerMasterDAO.existsByLedgerCode(ledgerMasterCreateDto.getLedgerCode())){
            throw new DuplicateKeyException("Duplicate entry for unique field:" + ledgerMasterCreateDto.getLedgerCode());
        };

        LedgerMasterCreate ledgerMasterCreate = LedgerMasterCreateMapper.mapToLedgerMasterCreate(ledgerMasterCreateDto);

        LedgerMasterCreate savedLedgerMasterCreate = ledgerMasterDAO.save(ledgerMasterCreate);

        return LedgerMasterCreateMapper.mapToLedgerMasterCreateDto(savedLedgerMasterCreate);

    }

    private void validateLedgerTypeMaster(LedgerMasterCreateDto ledgerMasterCreateDto){
        if(ledgerMasterCreateDto.getLedgerCode() == null || ledgerMasterCreateDto.getLedgerCode().isEmpty()){
            throw new IllegalArgumentException("Unique field Cannot be empty");
        }
    }

    @Override
    public LedgerMasterCreateDto getLedgerCode(String ledgerCode){
        LedgerMasterCreate ledgerMasterCreate = ledgerMasterDAO.findById(ledgerCode).orElseThrow(()->

                new ResourceNotFoundException("Ledger Code is not found with this name:" + ledgerCode));

        return LedgerMasterCreateMapper.mapToLedgerMasterCreateDto(ledgerMasterCreate);
    }

    @Override
    public List<LedgerMasterCreateDto> getAllLedgerCodes(){
        List<LedgerMasterCreate> ledgerMasterCreate = ledgerMasterDAO.findAll();

        return ledgerMasterCreate.stream().map(LedgerMasterCreateMapper::mapToLedgerMasterCreateDto).toList();

    }


    @Override
    public LedgerMasterCreateDto updateLedgerMaster(String ledgerCode, LedgerMasterCreateDto updatedLedgerMaster){

        LedgerMasterCreate ledgerMasterCreate = ledgerMasterDAO.findById(ledgerCode).orElseThrow(()->

                new ResourceNotFoundException("Ledger Code is not found with this name:" + ledgerCode));

        ledgerMasterCreate.setLedgerCode(updatedLedgerMaster.getLedgerCode());
        ledgerMasterCreate.setLedgerName(updatedLedgerMaster.getLedgerName());

        LedgerMasterCreate ledgerMasterCreateObj = ledgerMasterDAO.save(ledgerMasterCreate);

        return LedgerMasterCreateMapper.mapToLedgerMasterCreateDto(ledgerMasterCreateObj);

    }

    @Override
    public void deleteLedgerMaster(String ledgerCode){
        LedgerMasterCreate ledgerMasterCreate = ledgerMasterDAO.findById(ledgerCode).orElseThrow(()->

                new ResourceNotFoundException("Ledger Code is not found with this name:" + ledgerCode));

        ledgerMasterDAO.deleteById(ledgerCode);

    }

}
